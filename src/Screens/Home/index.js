import React from "react";

import { ConexionLogo } from "../../components/ConexionLogo";
import { Title } from "../../components/Title";
import { LinkAudio } from "../../components/LinkAudio";
import { GradientContainer } from "../../components/GradientContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import { useIsFocused } from "@react-navigation/native";

import { MyContext } from "../../Context";


const Home = () => {
    const context = React.useContext(MyContext);

    const isFocused = useIsFocused();

    React.useEffect(() => {
        if (isFocused) {
            context.setScreenView(1);
        }
    }, [isFocused]);

    // gradientColor = ["#434343", "#000000"];
    gradientColor = ["#FFFFFF", "#BABABA"];

    return(
        <ScrollViewContainer>
            <GradientContainer 
                colors={gradientColor}
                padding={20}
                paddingTop={40}
            >
                <ConexionLogo/>
                <Title 
                    title={"Exclusivamente para tí."} 
                    color={"#848484"}
                    borderColor={"transparent"}
                />
                <LinkAudio
                    isFocused={isFocused}
                />
            </GradientContainer>
        </ScrollViewContainer>
    );
}
export { Home };
