import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MyContext } from '../../Context';
import { AudioControls } from '../AudioControls';

import LottieView from 'lottie-react-native';

const LinkAudio = () => {
    const context = React.useContext(MyContext);

    const lottieRef = useRef(null);
    const [loop, setLoop] = useState(false);

    const playFullAnimation = () => {
        setLoop(false)
        lottieRef.current.play(0, 183);

        setTimeout(() => {
            setLoop(true)
            lottieRef.current.play(155, 183);
            setTimeout(() => {
                setLoop(false);
                lottieRef.current.play(155, 200);
                setTimeout(() => {
                    lottieRef.current.play(0, 183);
                    playFullAnimation();
                }, 2000)
            }, 20000)
        }, 7500);
    };
  

    const colorFilter = [
        {
            keypath: "bg circle Outlines",
            color: "#EFA50B",
        },
    ]
    //Sonando 155, 183
    //

    return (
        <View style={styles.audioContainer}>
            <TouchableOpacity onPress={playFullAnimation}>
                <Text>Boton</Text>
            </TouchableOpacity>

            <View style={styles.waveContainer}>

                <LottieView
                    ref={lottieRef}
                    source={require("../../../assets/animations/audio-animation.json")}
                    autoPlay={false}
                    loop={loop}
                    style={{width: "100%", height: "100%"}}
                    speed={0.8}
                    colorFilters={colorFilter}
                />
                {/* {context.viewAnimation && 
                    <LottieView
                        ref={lottieRef}
                        source={require("../../../assets/animations/audio-animation.json")}
                        // autoPlay={context.animationPlay}
                        autoPlay={false}
                        loop={false}
                        style={{width: "100%", height: "100%"}}
                        speed={0.8}
                        colorFilters={colorFilter}
                        onAnimationFinish={() => handleAnimationFinish()}
                    />
                } */}

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