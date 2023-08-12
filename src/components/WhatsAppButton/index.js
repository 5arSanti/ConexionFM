import { Image, Linking, StyleSheet, TouchableOpacity } from "react-native";
import { MyContext } from "../../Context"
import React from "react";

const WhatsAppButton = () => {
    const context = React.useContext(MyContext);

    const handleOpenSocialMedia = async () => {
        const url = context.socialMedia[0]?.link;
        const supported = await Linking.canOpenURL(url)

        if(supported){
            await Linking.openURL(url);
        }
        else {
            alert("No se pudo abrir");
            context.setError(true);
        }
    }

    return(
        <TouchableOpacity style={styles.whatsAppButtonContainer} onPress={() => {handleOpenSocialMedia()}}>
            <Image source={context.socialMedia[0]?.image[1]} style={styles.socialIcon}/>
        </TouchableOpacity>
    );
}

export { WhatsAppButton };

const styles = StyleSheet.create({
    whatsAppButtonContainer: {
        width: 60,
        height: 60,
        padding: 15,

        position: "absolute",
        bottom: 75,
        right: 10,

        borderRadius: 100,
        backgroundColor: "#EFA50B",
    },
    socialIcon: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    }
})