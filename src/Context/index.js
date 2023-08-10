import React from "react";
import * as Font from "expo-font";
import { Audio } from 'expo-av';

import TrackPlayer, { AppKilledPlaybackBehavior, Capability, State } from 'react-native-track-player';
import { setUpPlayer, addTrack } from "../../musicPlayerServices.js"

import { Home } from "../Screens/Home";
import { RadioContent } from "../Screens/RadioContent";
import { AboutUs } from "../Screens/AboutUs";

import { radialContentArray } from "../utils/radialContentArray.js";
import { socialMediaList } from "../utils/socialMediaList.js";

export const MyContext = React.createContext();

const MyProvider = ({children}) => {
    //Loading and Error
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);


    //Routes
    const [screenView, setScreenView] = React.useState(1);

    const RenderView = () => {
        switch (screenView) {
            case 1: return(<Home/>);break;
            case 2: return(<RadioContent/>);break;
            case 3: return(<AboutUs/>);break;
        }
    }

    //Fuentes
    const [fontsLoaded, setFontsLoaded] = React.useState(false);

    React.useEffect(() => {
        if(!fontsLoaded){
            loadFonts();   
        }
    }, []);

    const loadFonts = async () => {
        await Font.loadAsync({
            "Questrial": require("../../assets/fonts/Questrial.ttf"),
            "Simple": require("../../assets/fonts/Simple.otf"),
        })
        setFontsLoaded(true); 
    }

    //Contenido Radial
    const [radial, setRadial] = React.useState([]);
    //Social Media
    const [socialMedia, setSocialMedia] = React.useState([]);
    //Iconos
    const [icons, setIcons] = React.useState({});
    const iconsList = {
        // ConexionIcon: "../../assets/icon.png",

        home: require("../../assets/nav-icons/home-icon.png"),
        homeActive: require("../../assets/nav-icons/home-icon2.png"),

        radio: require("../../assets/nav-icons/radio-icon.png"),
        radioActive: require("../../assets/nav-icons/radio-icon2.png"),

        about: require("../../assets/nav-icons/about-icon.png"),
        aboutActive: require("../../assets/nav-icons/about-icon2.png"),

        audioPlaying: require("../../assets/icons/app-icons/pause-black-icon.png"), //Sonando
        audioPlayingWhite: require("../../assets/icons/app-icons/pause-white-icon.png"), //Sonando

        audioPause: require("../../assets/icons/app-icons/play-icon.png"), //Pausa
        audioPauseWhite: require("../../assets/icons/app-icons/play-icon-white.png"), //Pausa
        
        audioMute: require("../../assets/icons/app-icons/mute-icon.png"), //Mutear
        audioMuteWhite: require("../../assets/icons/app-icons/mute-icon-white.png"), //Mutear
        
        audioNoMute: require("../../assets/icons/app-icons/volume-icon.png"), //Desmutear
        audioNoMuteWhite: require("../../assets/icons/app-icons/volume-icon-white.png"), //Desmutear
    }

    React.useEffect(() => {
        setIcons(iconsList);

        setRadial(radialContentArray);

        setSocialMedia(socialMediaList)
    }, []);


    //Emisora
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [sound, setSound] = React.useState(null);
    const [isPlayerReady, setIsPlayerReady] = React.useState(false);

    const audioUri = 'https://conexion.fm:8000/stream';

    const setup = async () => {
        setLoading(true);
        try{
            let isSetup = await setUpPlayer();
            if(isSetup){
                await addTrack()
            }
            setIsPlayerReady(isSetup);

            await TrackPlayer.updateOptions({
                android: {
                    AppKilledPlaybackBehavior: AppKilledPlaybackBehavior.PausePlayback,
                }, 
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.Stop,
                    Capability.SkipToNext,
                ],
                compactCapabilities: [
                    Capability.Play,
                    Capability.Pause,
                ],
                notificationCapabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.Stop,
                ],
              });
            setLoading(false);
            

            await TrackPlayer.play();
            setIsPlaying(true);

            if(screenView === 1){
                setViewAnimation(true);
            }
            else{
                setViewAnimation(false);
            }
        }
        catch(err){
            setLoading(false);
            setError(true);
            alert("Sucedio un error: ", err);
            console.log(err);
        }
        
    }

    React.useEffect(() => {
        setup();
    }, [])

    React.useEffect(() => {
        const subscribeToState = async () => {
            const state = await TrackPlayer.getState();
            setIsPlaying(state === TrackPlayer.getState());
        };

        subscribeToState();
    }, [])
    // Activar audio
    
    const [viewAnimation, setViewAnimation] = React.useState(false);

    const handleAudio = async () => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        try {
            if (currentTrack !== null){
                if(isPlaying){
                    await TrackPlayer.pause();
                    setViewAnimation(false)
                }
                else {
                    await TrackPlayer.play();
                    setViewAnimation(true);
                }
                setIsPlaying(!isPlaying);
            }
        }
        catch(err){
            setLoading(false);
            setError(true);
            alert("Sucedio un error: ", err);
            console.log(err);
        }
    }

    //Volumen
    const [ volume, setVolume ] = React.useState(1);


    const handleVolume = async () => {
        try {
            if(volume === 1){
                // await sound.setVolumeAsync(0);
                await TrackPlayer.setVolume(0);
                setVolume(0);
                
            }
            else{
                // await sound.setVolumeAsync(1);
                await TrackPlayer.setVolume(1);
                setVolume(1);                
            }
        }
        catch(err){
            alert("Ocurrio un error.")
            console.log(err);
        }
    }

    //Animacion
    const [loop, setLoop] = React.useState(false);
    const lottieRef = React.useRef(null);
    const [animationTimeout, setAnimationTimeout] = React.useState(null);

    const playFullAnimation = () => {
        setLoop(false);
        lottieRef.current?.play(7, 183);

        const timeout1 = setTimeout(() => {
            setLoop(true)
            lottieRef.current?.play(155, 183);
    
            const timeout2 = setTimeout(() => {
                setLoop(false);
                lottieRef.current?.play(155, 200);

                const timeout3 = setTimeout(() => {
                    lottieRef.current?.play(0, 7);
                    const timeout4 = setTimeout(() => {
                        if(viewAnimation){
                            playFullAnimation();
                        }
                    }, 500);
                    setAnimationTimeout(timeout4);

                }, 2000);
                setAnimationTimeout(timeout3);
                
            }, 20000);
            setAnimationTimeout(timeout2);
            
        }, 7500);
        setAnimationTimeout(timeout1);
    };

    React.useEffect(() => {
        return () => {
            if (animationTimeout) {
                clearTimeout(animationTimeout);
            }
        };
    }, [animationTimeout]);

    //Corousel de Imagenes
    const [activeCard, setActiveCard] = React.useState(0);


    return(
        <MyContext.Provider
            value={{
                loading,
                error,

                screenView,
                setScreenView,
                RenderView,

                fontsLoaded,
                loadFonts,

                icons,
                radial,
                socialMedia,

                handleAudio,
                handleVolume,
                isPlaying,
                setIsPlaying,
                volume,

                viewAnimation,
                setViewAnimation,

                playFullAnimation,  
                loop,
                lottieRef,

                activeCard,
                setActiveCard,
            }}
        >
            {children}
        </MyContext.Provider>
    );
}
export {MyProvider};