import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text,} from "react-native";
import { ConexionLogo } from "../../components/ConexionLogo";
import { Title } from "../../components/Title";
import { GradientContainer } from "../../components/GradientContainer";

const AboutUs = () => {
    return(
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
            
        </GradientContainer>
    );
}
export { AboutUs };