import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MyContext } from "../../Context";

import { FontAwesome5 } from '@expo/vector-icons';

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
                <FontAwesome5 name="pause" size={25} color="#FFF" />
            );
        }
        else if(!context.loading && !context.isPlaying){
            return(
                <FontAwesome5 name="play" size={25} color="#FFF" />
            );
        }
    }

    const renderAudioVolume = () => {
        if(context.volume === 1){
            return(
                <FontAwesome5 name="volume-up" size={22} color="#FFF" />
            );
        }
        else if(context.volume === 0){
            return(
                <FontAwesome5 name="volume-mute" size={25} color="#FFF"/>
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
        height: 65,


        flexDirection: "row",
        gap: 20,

        alignItems: "center",
        backgroundColor: "#000",
        paddingHorizontal: 25,
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 15,
        width: "auto",
    },
    buttonAudio: {
        height: "100%",
        width: "auto",

        display: "flex",
        alignItems: "center",
    },
    audioControlsText: {
        color: "#FFF",
        fontFamily: "Questrial",
        paddingLeft: 20,
        borderLeftColor: "#FFF",
        borderLeftWidth: 1,
    }
})