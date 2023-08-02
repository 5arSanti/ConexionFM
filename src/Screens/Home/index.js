import { Image, StyleSheet, Text, View,} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { ConexionLogo } from "../../components/ConexionLogo";
import { Title } from "../../components/Title";
import { LinkAudio } from "../../components/LinkAudio";
import React from "react";
import { MyContext } from "../../Context";

const Home = () => {
    const context = React.useContext(MyContext);

    return(
        <LinearGradient 
            colors={["#FFFFFF", "#BABABA"]}
            style={styles.homeContainer}
        >
            <ConexionLogo/>
            <Title 
                title={"Exclusivamente para ti"} 
                color={"#848484"}
                borderColor={"transparent"}
            />
            <LinkAudio/>
        </LinearGradient>
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