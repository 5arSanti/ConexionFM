import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const LinkAudio = () => {
    const videoUri = 'https://conexion.fm:8000/stream';

    return (
        <View style={styles.container}>
            <Video
                source={{ uri: videoUri }}
                shouldPlay
                useNativeControls
                style={styles.video}
                resizeMode="contain"
            />
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