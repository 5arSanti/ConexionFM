import React from "react";
import * as Font from "expo-font";

import TrackPlayer, { AppKilledPlaybackBehavior, Capability, State } from 'react-native-track-player';
import { setUpPlayer, addTrack } from "../../musicPlayerServices.js"

import { radialContentArray } from "../utils/radialContentArray.js";
import { socialMediaList } from "../utils/socialMediaList.js";
import { useNavigation } from "@react-navigation/native";

export const MyContext = React.createContext();

const MyProvider = ({children}) => {
    //Loading and Error
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);


    //Routes
    const navigation = useNavigation();
    const [screenView, setScreenView] = React.useState(1);

    //Refresh
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = async () => {
        setLoading(true)
        try{
            await TrackPlayer.pause();
            await TrackPlayer.reset();
            await setup();
        }
        catch(err){
            setLoading(false);
            setError(true);
            alert("Sucedió un error, lo estamos solucionando.");
            setCurrentTrack(false);
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

    React.useEffect(() => {
        setRadial(radialContentArray);

        setSocialMedia(socialMediaList)
    }, []);


    //Emisora
    const [isPlaying, setIsPlaying] = React.useState(null);
    const [isPlayerReady, setIsPlayerReady] = React.useState(false);

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
                ],
                compactCapabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.Stop,
                ],
                notificationCapabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.Stop,
                ],
                icon: require("../../assets/Logo-512px.png"),
            });
            
            const state = await TrackPlayer.getState();
            await TrackPlayer.play();
            setIsPlaying(true);
            setLoading(false);

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
            alert("Sucedió un error, lo estamos solucionando.");
            setCurrentTrack(false);
        }
        
    }

    React.useEffect(() => {
        setup();
    }, [])

    
    const [currentTrack, setCurrentTrack] = React.useState(true);
    React.useEffect(() => {
        const subscribeToState = async () => {
            const state = await TrackPlayer.getState();
            setIsPlaying(state === TrackPlayer.getState());
        };

        subscribeToState();

        const stateListener = TrackPlayer.addEventListener('playback-state', async () => {
            const state = await TrackPlayer.getState();
            setIsPlaying(state === State.Playing);
            setCurrentTrack(state === State.None);
            setLoading(state === State.Connecting);
            setLoading(state === State.Buffering);
        });
    }, [])


    // Activar audio
    const [viewAnimation, setViewAnimation] = React.useState(false);

    const handleAudio = async () => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        const state = await TrackPlayer.getState();
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
            alert("Sucedió un error, lo estamos solucionando.");
            setCurrentTrack(false);
        }
    }

    //Volumen
    const [ volume, setVolume ] = React.useState(1);

    const handleVolume = async () => {
        try {
            if(volume === 1){
                await TrackPlayer.setVolume(0);
                setVolume(0);
                
            }
            else{
                await TrackPlayer.setVolume(1);
                setVolume(1);                
            }
        }
        catch(err){
            setError(true);
            alert("Sucedió un error, lo estamos solucionando.");
            setCurrentTrack(false);
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

                refreshing,
                setRefreshing,
                onRefresh,

                navigation,
                screenView,
                setScreenView,

                fontsLoaded,
                loadFonts,

                radial, 
                socialMedia,

                handleAudio,
                handleVolume,
                isPlaying,
                setIsPlaying,
                volume,

                currentTrack,
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