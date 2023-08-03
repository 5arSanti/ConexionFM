import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MyContext } from '../../Context';
import { AudioControls } from '../AudioControls';

const LinkAudio = () => {

    return (
        <View style={styles.audioContainer}>
            <View style={styles.waveContainer}>

            </View>

            <AudioControls/>

        </View>
    );
}

export { LinkAudio };

const styles = StyleSheet.create({
    audioContainer: {
        width: "100%",
        flex: 1,
        alignItems: 'center',
        gap: 10,
    },
    waveContainer: {
        width: 340,
        height: 340,
        backgroundColor: "#D9D9D9",
        borderRadius: 25,
    }
});