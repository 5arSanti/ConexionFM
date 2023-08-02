import React from "react";
import * as Font from "expo-font";
import { Audio } from 'expo-av';


import { Home } from "../Screens/Home";
import { RadioContent } from "../Screens/RadioContent";
import { AboutUs } from "../Screens/AboutUs";

export const MyContext = React.createContext();

const MyProvider = ({children}) => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);


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

    //Emisora
    const [isPlaying, setIsPlaying] = React.useState(true);
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

    React.useEffect(() => {
        handleAudio();
    }, [])

    const handleAudio = async () => {
        try {
            if (sound){
                if(isPlaying){
                    await sound.pauseAsync()
                }
                else{
                    await sound.playAsync();
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
            }
            else{
                await sound.setVolumeAsync(1);
                setVolume(1);
            }
        }
        catch(err){
            alert("Ocurrio un error.")
            console.log(err);
        }
    }


    


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

                handleAudio,
                handleVolume,
                isPlaying,
                setIsPlaying,
                volume,

            }}
        >
            {children}
        </MyContext.Provider>
    );
}
export {MyProvider};