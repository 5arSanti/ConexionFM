import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
                <Image style={styles.audioImage} source={context.icons.audioPlaying}/>
            );
        }
        else if(!context.loading && !context.isPlaying){
            return(
                <Image style={styles.audioImage} source={context.icons.audioPause}/>
            );
        }
    }

    const renderAudioVolume = () => {
        if(context.volume === 1){
            return(
                <Image style={styles.audioImage} source={context.icons.audioNoMute}/>
            );
        }
        else if(context.volume === 0){
            return(
                <Image style={styles.audioImage} source={context.icons.audioMute}/>
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
        // width: 100,
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