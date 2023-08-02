import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Video, Audio } from 'expo-av';

const LinkAudio = () => {
    const audioUri = 'https://conexion.fm:8000/stream';
    const sound = new Audio.Sound();

    const playAudio = async () => {
        try {
            await sound.loadAsync({uri: audioUri})
            await sound.playAsync();
        }
        catch(err){
            alert("Sucedio un error: ", err);
            console.log(err);
        }
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => playAudio()}>
                <Text>Reproducir</Text>
            </TouchableOpacity>

            {/* <Video
                source={{ uri: videoUri }}
                shouldPlay
                useNativeControls
                style={styles.video}
                resizeMode="contain"
            /> */}
        </View>
    );
}

export { LinkAudio };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: 300,
        height: 200,
    },
});