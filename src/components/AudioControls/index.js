import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';

import { ActivityIndicator, Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { MyContext } from "../../Context";


const AudioControls = () => {
    const context = React.useContext(MyContext);

    const renderLoading = () => {
        if(context.loading){
            return(
                <ActivityIndicator size={40} color={"#EFA50B"}/>
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
                <FontAwesome5 name="pause" size={40} color="black" />
            );
        }
        else if(!context.loading && !context.isPlaying){
            return(
                <FontAwesome5 name="play" size={40} color="#b70006" />
            );
        }
    }

    const renderAudioVolume = () => {
        if(context.volume === 1){
            return(
                <FontAwesome5 name="volume-up" size={40} color="black" />
            );
        }
        else if(context.volume === 0){
            return(
                <FontAwesome5 name="volume-mute" size={40} color="#b70006"/>
            );
        }
    }

    return(
        <View style={styles.audioControlersContainer}>
            {renderLoading()}
        </View>
    );
}

export { AudioControls };



const styles = StyleSheet.create({
    audioControlersContainer: {
        width: 225,
        height: 100,

        backgroundColor: "#D9D9D9",
        borderRadius: 10,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        padding: 10,
        gap: 20,
    },
    buttonAudio: {
        flex: 1,
        height: "100%",

        backgroundColor: "#C5C5C5",
        borderRadius: 10,

        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    audioImage: {
        width: 40, 
        height: 40, 
        objectFit: "cover"
    }
})