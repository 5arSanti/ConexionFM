import React from "react";

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

    return(
        <MyContext.Provider
            value={{
                screenView,
                setScreenView,
                RenderView,
            }}
        >
            {children}
        </MyContext.Provider>
    );
}
export {MyProvider};