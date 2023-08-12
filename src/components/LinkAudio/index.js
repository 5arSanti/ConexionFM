import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MyContext } from '../../Context';
import { AudioControls } from '../AudioControls';

import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LinkAudio = () => {
    const context = React.useContext(MyContext);
    const loadingRef = React.useRef();
  
    React.useEffect(() => {
        if(context.loading){
            loadingRef.current?.play(7, 24);
        }
        else if(context.isPlaying && context.viewAnimation){
            context.playFullAnimation();
        }
        else {
            loadingRef.current?.play(7, 24);
        }
    }, [context.loading, context.screenView, context.isPlaying]);

    const renderAnimation = () => {
        if(context.screenView === 1){
            if (context.loading){
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
            else if(context.isPlaying){
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
            keypath: "*",
            color: "#EFA50B",
        },
    ]

    return (
        <View style={styles.audioContainer}>

            <LinearGradient style={styles.waveContainer} colors={["#434343", "#000000"]}>
                {renderAnimation()}
            </LinearGradient>

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