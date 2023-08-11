import React from "react";
import { ConexionLogo } from "../../components/ConexionLogo";
import { Title } from "../../components/Title";
import { GradientContainer } from "../../components/GradientContainer";
import { SocialMediaContainer } from "../../components/AboutUsScreen/SocialMediaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import { useIsFocused } from "@react-navigation/native";
import { MyContext } from "../../Context";

const AboutUs = () => {
    const context = React.useContext(MyContext);

    const isFocused = useIsFocused();

    React.useEffect(() => {
        if (isFocused) {
            context.setScreenView(3);
        }
    }, [isFocused]);

    return(
        <ScrollViewContainer>
            <GradientContainer 
                colors={["#434343", "#000000"]}
                padding={20}
            >
                <ConexionLogo/>
                <Title 
                    title={"Redes Sociales"} 
                    color={"#FFF"}
                    borderColor={"white"}
                />

                <SocialMediaContainer/>
                
            </GradientContainer>
        </ScrollViewContainer>
    );
}
export { AboutUs };