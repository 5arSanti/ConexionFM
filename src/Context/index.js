import React from "react";
import * as Font from "expo-font";

import { Home } from "../Screens/Home";
import { RadioContent } from "../Screens/RadioContent";
import { AboutUs } from "../Screens/AboutUs";

export const MyContext = React.createContext();

const MyProvider = ({children}) => {
    
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

    return(
        <MyContext.Provider
            value={{
                screenView,
                setScreenView,
                RenderView,

                fontsLoaded,
                loadFonts,
            }}
        >
            {children}
        </MyContext.Provider>
    );
}
export {MyProvider};