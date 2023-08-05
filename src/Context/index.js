import React, { useRef } from "react";
import * as Font from "expo-font";
import { Audio } from 'expo-av';


import { Home } from "../Screens/Home";
import { RadioContent } from "../Screens/RadioContent";
import { AboutUs } from "../Screens/AboutUs";

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
                    // stopAnimation()
                    setIsAnimating(false);
                    setViewAnimation(false)
                }
                else{
                    await sound.playAsync();
                    setViewAnimation(true);
                    playFullAnimation()
                    setIsAnimating(true);
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
        // stopAnimation();
        try {
            if(volume === 1){
                await sound.setVolumeAsync(0);
                setVolume(0);
                setViewAnimation(false);
                setIsAnimating(false);
            }
            else{
                await sound.setVolumeAsync(1);
                setVolume(1);
                playFullAnimation()
                setViewAnimation(true);
                setIsAnimating(true);
            }
        }
        catch(err){
            alert("Ocurrio un error.")
            console.log(err);
        }
    }

    //Animacion
    const [loop, setLoop] = React.useState(false);
    const lottieRef = useRef(null);
    const [animationTimeout, setAnimationTimeout] = React.useState(null);
    const [isAnimating, setIsAnimating] = React.useState(false);

    const playFullAnimation = () => {
        setIsAnimating(true);
        setLoop(false);
        lottieRef.current?.play(0, 183);

        const timeout1 = setTimeout(() => {
            if(!isAnimating) return;
            setLoop(true)
            lottieRef.current?.play(155, 183);
    
            const timeout2 = setTimeout(() => {
                if(!isAnimating) return;
                setLoop(false);
                lottieRef.current?.play(155, 200);

                const timeout3 = setTimeout(() => {
                    if(!isAnimating) return;
                    lottieRef.current?.play(0, 183);
                    if(viewAnimation){
                        playFullAnimation();
                    }
                }, 2000);
                setAnimationTimeout(timeout3);
                
            }, 20000);
            setAnimationTimeout(timeout2);
            
        }, 7500);
        setAnimationTimeout(timeout1);
    };

    // const stopAnimation = () => {
    //     clearTimeout(animationTimeout);
    // }

    React.useEffect(() => {
        // Limpiar el timeout cuando el componente se desmonta
        return () => {
            if (animationTimeout) {
                clearTimeout(animationTimeout);
            }
        };
    }, [animationTimeout]);
    
    // React.useEffect(() => {
    //     if (isPlaying) {
    //         setShouldAnimate(true);
    //         playFullAnimation();
    //     } 
    //     else {
    //         setShouldAnimate(false);
    //     }
    // }, [isPlaying]);

    


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
            }}
        >
            {children}
        </MyContext.Provider>
    );
}
export {MyProvider};