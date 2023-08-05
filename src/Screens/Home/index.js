import { Image, StyleSheet, Text, View,} from "react-native";
import { ConexionLogo } from "../../components/ConexionLogo";
import { Title } from "../../components/Title";
import { LinkAudio } from "../../components/LinkAudio";
import React from "react";
import { MyContext } from "../../Context";
import { GradientContainer } from "../../components/GradientContainer";

const Home = () => {
    const context = React.useContext(MyContext);

    // gradientColor = ["#434343", "#000000"];
    gradientColor = ["#FFFFFF", "#BABABA"];

    return(
        <GradientContainer 
            colors={gradientColor}
            style={styles.homeContainer}
        >
            <ConexionLogo/>
            <Title 
                title={"Exclusivamente para tí."} 
                color={"#848484"}
                borderColor={"transparent"}
            />
            <LinkAudio/>
        </GradientContainer>
    );
}
export { Home };

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