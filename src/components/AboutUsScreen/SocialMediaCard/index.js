import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SocialMediaCard = (data) => {

    const handleOpenSocialMedia = async () => {
        const url = data.data?.link;
        const supported = await Linking.canOpenURL(url)

        if(supported){
            await Linking.openURL(url);
        }
        else {
            alert("No se pudo abrir");
        }
    }


    return(
        <TouchableOpacity style={styles.socialMediaCardContainer} onPress={() => {handleOpenSocialMedia()}}>
            <Image source={data.data?.image[0]} style={styles.socialIcon}/>
            <Text style={styles.socialMediaText}>{data.data?.name}</Text>
        </TouchableOpacity>
    );
}

export { SocialMediaCard };

const styles = StyleSheet.create({
    socialMediaCardContainer: {
        flex: 1,
        flexDirection: "row",
        gap: 25,

        width: "100%",
        height: 75,
        borderRadius: 10,

        paddingVertical: 10,
        paddingHorizontal: 25,

        alignItems: "center",

        backgroundColor: "#353535",
    },
    socialIcon: {
        objectFit: "contain",
        height: "100%",
        width: 50,
    },
    socialMediaText: {
        color: "#FFF",
        fontFamily: "Questrial",
        fontSize: 16,
    }
})