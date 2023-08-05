import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MyContext } from '../../Context';
import { AudioControls } from '../AudioControls';

import LottieView from 'lottie-react-native';

const LinkAudio = () => {
    const context = React.useContext(MyContext);
    const animationRef = React.useRef();
  
    React.useEffect(() => {
        if(context.isPlaying && context.viewAnimation){
            context.playFullAnimation();
        }
        else{
            animationRef.current?.play(5, 24);
        }
    }, [context.isPlaying, context.viewAnimation, animationRef.current]);

    const colorFilter = [
        {
            keypath: "bg circle Outlines",
            color: "#EFA50B",
        },
    ]

    return (
        <View style={styles.audioContainer}>

            <View style={styles.waveContainer}>
        
                {context.viewAnimation && context.screenView === 1 ? 
                    <LottieView
                        ref={context.lottieRef}
                        source={require("../../../assets/animations/audio-animation.json")}
                        autoPlay={false}
                        loop={context.loop}
                        style={{width: "100%", height: "100%"}}
                        speed={0.8}
                        colorFilters={colorFilter}
                    />
                    :
                    <LottieView
                        ref={animationRef}
                        source={require("../../../assets/animations/audio-animation.json")}
                        autoPlay={true}
                        loop={true}
                        style={{width: "100%", height: "100%"}}
                        speed={0.8}
                        colorFilters={colorFilter}
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