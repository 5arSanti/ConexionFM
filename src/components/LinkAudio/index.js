import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MyContext } from '../../Context';
import { AudioControls } from '../AudioControls';

import LottieView from 'lottie-react-native';

const LinkAudio = () => {
    const context = React.useContext(MyContext);

    const colorFilter = {
        keypath: "*",
        color: "#EFA50B",
    }

    return (
        <View style={styles.audioContainer}>
            <View style={styles.waveContainer}>
                {context.viewAnimation && 
                    <LottieView
                        source={require("../../../assets/animations/audio-animation.json")}
                        autoPlay={context.animationPlay}
                        loop
                        style={{width: "100%", height: "100%"}}
                        speed={0.75}
                        colorFilters={[colorFilter]}
                    />
                }

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

        display: "flex",
        justifyContent: "center",
        alignItems: "center",


        overflow: 'hidden',
    }
});