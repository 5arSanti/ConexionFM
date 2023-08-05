import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MyContext } from '../../Context';
import { AudioControls } from '../AudioControls';

import LottieView from 'lottie-react-native';

const LinkAudio = () => {
    const context = React.useContext(MyContext);
    const loadingRef = React.useRef();
  
    React.useEffect(() => {
        if(context.isPlaying && context.viewAnimation){
            context.playFullAnimation();
        }
        else {
            loadingRef.current?.play(7, 24);
        }
    }, [context.isPlaying, context.viewAnimation, loadingRef.current]);

    const renderAnimation = () => {
        if(context.screenView === 1){
            if(context.isPlaying && context.viewAnimation){
                return(
                    <LottieView
                        ref={context.lottieRef}
                        source={require("../../../assets/animations/audio-animation.json")}
                        autoPlay={false}
                        loop={context.loop}
                        style={{width: "100%", height: "100%"}}
                        speed={0.8}
                        colorFilters={colorFilter}
                    />
                );
            }
            else if (context.loading){
                return(
                    <LottieView
                        ref={loadingRef}
                        source={require("../../../assets/animations/audio-animation.json")}
                        autoPlay={true}
                        loop={true}
                        style={{width: "100%", height: "100%"}}
                        speed={0.8}
                        colorFilters={colorFilter}
                    />
                );
            }
            else {
                return(
                    <LottieView
                        ref={loadingRef}
                        source={require("../../../assets/animations/audio-animation.json")}
                        autoPlay={false}
                        loop={false}
                        style={{width: "100%", height: "100%"}}
                        speed={0}
                        colorFilters={colorFilter}
                    />
                );
            }
        }
    }

    const colorFilter = [
        {
            keypath: "bg circle Outlines",
            color: "#EFA50B",
        },
    ]

    return (
        <View style={styles.audioContainer}>

            <View style={styles.waveContainer}>
                {renderAnimation()}
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
        width: "100%",
        height: 340,
        backgroundColor: "#D9D9D9",
        borderRadius: 25,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",


        overflow: 'hidden',
    }
});