import React from "react";
import * as Font from "expo-font";
import { Audio } from 'expo-av';


import { Home } from "../Screens/Home";
import { RadioContent } from "../Screens/RadioContent";
import { AboutUs } from "../Screens/AboutUs";

import { radialContentArray } from "../utils/radialContentArray.js";

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
    const [radial, setRadial] = React.useState(null);
    //Iconos
    const [icons, setIcons] = React.useState({});
    const iconsList = {
        home: require("../../assets/nav-icons/home-icon.png"),
        homeActive: require("../../assets/nav-icons/home-icon2.png"),

        radio: require("../../assets/nav-icons/radio-icon.png"),
        radioActive: require("../../assets/nav-icons/radio-icon2.png"),

        about: require("../../assets/nav-icons/about-icon.png"),
        aboutActive: require("../../assets/nav-icons/about-icon2.png"),

        audioPlaying: require("../../assets/icons/app-icons/pause-black-icon.png"), //Sonando
        audioPause: require("../../assets/icons/app-icons/play-icon.png"), //Pausa
        audioMute: require("../../assets/icons/app-icons/mute-icon.png"), //Mutear
        audioNoMute: require("../../assets/icons/app-icons/volume-icon.png"), //Desmutear
    }
    React.useEffect(() => {
        setIcons(iconsList);

        const reversedRadialContentArray = radialContentArray.reverse();
        setRadial(reversedRadialContentArray);
    }, []);


    //Emisora
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [sound, setSound] = React.useState(null);

    const audioUri = 'https://conexion.fm:8000/stream';

    React.useEffect(() => {
        const loadAudio = async () => {
            setLoading(true);
            try {
                const { sound } = await Audio.Sound.createAsync({ uri: audioUri});
                setSound(sound);
                setLoading(false);
                
                await sound.playAsync();

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
        loadAudio();

        return () => {
            if(sound){
                sound.unloadAsync();
            }
        }
    }, [])

    //Activar audio
    const [viewAnimation, setViewAnimation] = React.useState(false);

    const handleAudio = async () => {
        try {
            if (sound){
                if(isPlaying){
                    await sound.pauseAsync()
                    setViewAnimation(false)
                }
                else{
                    await sound.playAsync();
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
                await sound.setVolumeAsync(0);
                setVolume(0);
                setViewAnimation(false);
                
            }
            else{
                await sound.setVolumeAsync(1);
                setVolume(1);
                setViewAnimation(true);
                
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
    const [activeCard, setActiveCard] = React.useState(null);


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