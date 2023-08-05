import { StyleSheet, Text, View,} from "react-native";
import { ConexionLogo } from "../../components/ConexionLogo";
import { Title } from "../../components/Title";
import { LinearGradient } from "expo-linear-gradient";
import { LinkAudio } from "../../components/LinkAudio";
import { GradientContainer } from "../../components/GradientContainer";

const RadioContent = () => {
    return(
        <GradientContainer 
            colors={["#434343", "#000000"]}
        >
            <ConexionLogo/>
            <Title 
                title={"Contenido Radial"} 
                color={"#848484"}
                borderColor={"transparent"}
            />
        </GradientContainer>
    );
}
export { RadioContent };

const styles = StyleSheet.create({
    homeContainer: {
        width: "100%",
        height: "100%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,

        padding: 20,
        paddingTop: 40,
    }
})