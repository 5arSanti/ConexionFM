import { ConexionLogo } from "../../components/ConexionLogo";
import { Title } from "../../components/Title";
import { GradientContainer } from "../../components/GradientContainer";
import { SocialMediaContainer } from "../../components/AboutUsScreen/SocialMediaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";

const AboutUs = () => {
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