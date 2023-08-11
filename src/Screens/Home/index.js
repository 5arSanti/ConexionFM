import { ConexionLogo } from "../../components/ConexionLogo";
import { Title } from "../../components/Title";
import { LinkAudio } from "../../components/LinkAudio";
import React from "react";
import { MyContext } from "../../Context";
import { GradientContainer } from "../../components/GradientContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import { useIsFocused } from "@react-navigation/native";

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
            >
                <ConexionLogo/>
                <Title 
                    title={"Exclusivamente para tí."} 
                    color={"#848484"}
                    borderColor={"transparent"}
                />
                <LinkAudio/>
            </GradientContainer>
        </ScrollViewContainer>
    );
}
export { Home };
