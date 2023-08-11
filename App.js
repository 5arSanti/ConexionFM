import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import TrackPlayer from 'react-native-track-player';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MyProvider, MyContext } from './src/Context';
import { NavigationButtons } from './src/components/NavigationButtons';
import { SecondAudioControls } from './src/components/SecondAudioControls';
import { WhatsAppButton } from './src/components/WhatsAppButton';
import { musicPlayerServices } from './musicPlayerServices';

import { Home } from './src/Screens/Home';
import { RadioContent } from './src/Screens/RadioContent';
import { AboutUs } from './src/Screens/AboutUs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


TrackPlayer.registerPlaybackService(() => musicPlayerServices);
const Stack = createNativeStackNavigator(); 

const MyStacks = () => {
    return(
        <Stack.Navigator
            backBehavior='firstRoute'
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RadioContent" component={RadioContent} />
            <Stack.Screen name="AboutUs" component={AboutUs} />
        </Stack.Navigator>
    );
}

const AppContext = () => {
    const context = React.useContext(MyContext);

    return(
        <View style={styles.container}>
            <StatusBar style='light'/>

            <View style={styles.screensContainer}>

                <MyStacks/>
                {context.screenView !== 1 && <WhatsAppButton/>}
                {context.screenView !== 1 && <SecondAudioControls/>}
            </View>

            <NavigationButtons/>
        </View>

    );
}
const Temporal = () => {
    return(
        <ScrollView contentContainerStyle={styles.scrollViewContainer} 
            style={styles.scrollView}
        >
            {/* {context.RenderView()} */}
        </ScrollView>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyProvider>
                <AppContext/>
            </MyProvider>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",

        backgroundColor: '#242424',

        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        gap: 10,

        padding: 20,
        paddingTop: 40,
    },
    screensContainer: {
        width: "100%",
        flex: 1,
        height: "85%",
        
        justifyContent: "center",

        position: "relative",

        backgroundColor: "transparent",

        borderRadius: 33,
        overflow: "hidden",
    },
    scrollViewContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    scrollView: {
        width: "100%",
        height: "80%",
    }
});
