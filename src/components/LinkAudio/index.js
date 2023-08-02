import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';
import { MyContext } from '../../Context';

const LinkAudio = () => {
    const context = React.useContext(MyContext);

    const renderAudioMode = () => {
        if(context.loading){
            return(
                <Text>Cargando...</Text>
            );
        }
        if(!context.loading && context.isPlaying){
            return(
                <Text>Pausar</Text>
            );
        }
        else if(!context.loading && !context.isPlaying){
            return(
                <Text>Reproducir</Text>
            );
        }
    }

    const renderAudioVolume = () => {
        if(context.volume === 1){
            return(
                <Text>Silenciar</Text>
            );
        }
        else if(context.volume === 0){
            return(
                <Text>Activar</Text>
            );
        }
    }

    return (
        <View style={styles.audioControlersContainer}>
            <View style={styles.waveContainer}>

            </View>

            <TouchableOpacity onPress={() => context.handleAudio()}>
                {renderAudioMode()}    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => context.handleVolume()}>
                <Text>{renderAudioVolume()}</Text>    
            </TouchableOpacity>

        </View>
    );
}

export { LinkAudio };

const styles = StyleSheet.create({
    audioControlersContainer: {
        width: "100%",
        flex: 1,
        alignItems: 'center',
    },
    waveContainer: {
        width: 340,
        height: 340,
        backgroundColor: "#D9D9D9",
        borderRadius: 25,
    }
});