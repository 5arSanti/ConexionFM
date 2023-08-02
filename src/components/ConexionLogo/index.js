import { Image, StyleSheet } from "react-native";

const ConexionLogo = () => {
    return(
        <Image source={require("../../../assets/logos/ConexionFMv2.png")}
            style={styles.image}
        />
    );
}

export { ConexionLogo }; 

const styles = StyleSheet.create({
    image: {
        width: "70%", 
        height: 130, 
        objectFit: "cover",
        marginBottom: 10,
    }
})