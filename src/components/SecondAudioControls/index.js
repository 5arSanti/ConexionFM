import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MyContext } from "../../Context";


const SecondAudioControls = () => {
    const context = React.useContext(MyContext);

    const renderLoading = () => {
        if(context.loading){
            return(
                <ActivityIndicator size={20} color={"#EFA50B"}/>
            );
        }
        else {
            return(
                <>
                    <TouchableOpacity style={styles.buttonAudio} onPress={() => context.handleAudio()}>
                        {renderAudioMode()}    
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonAudio} onPress={() => context.handleVolume()}>
                        {renderAudioVolume()}  
                    </TouchableOpacity>
                </>
            );
        }
    }

    const renderAudioMode = () => {
        if(!context.loading && context.isPlaying){
            return(
                <Image style={styles.audioImage} source={context.icons.audioPlayingWhite}/>
            );
        }
        else if(!context.loading && !context.isPlaying){
            return(
                <Image style={styles.audioImage} source={context.icons.audioPauseWhite}/>
            );
        }
    }

    const renderAudioVolume = () => {
        if(context.volume === 1){
            return(
                <Image style={styles.audioImage} source={context.icons.audioNoMuteWhite}/>
            );
        }
        else if(context.volume === 0){
            return(
                <Image style={styles.audioImage} source={context.icons.audioMuteWhite}/>
            );
        }
    }

    return(
        <View style={styles.audioControlsContainer}>
            <View style={styles.buttonsContainer}>
                {renderLoading()}
            </View>
            <Text style={styles.audioControlsText}>Conexión.FM - Señal en Vivo</Text>
        </View>
    );
}

export { SecondAudioControls };

const styles = StyleSheet.create({
    audioControlsContainer: {
        width: "100%",
        height: 70,


        flexDirection: "row",
        gap: 20,

        alignItems: "center",
        backgroundColor: "#000",
        paddingHorizontal: 25,
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        width: "auto",
    },
    buttonAudio: {
        height: "100%",
        width: "auto",

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    audioImage: {
        height: "100%",
        width: 25,
        objectFit: "contain",
    },
    audioControlsText: {
        color: "#FFF",
        fontFamily: "Questrial",
        paddingLeft: 20,
        borderLeftColor: "#FFF",
        borderLeftWidth: 1,
    }
})