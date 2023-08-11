import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';

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


TrackPlayer.registerPlaybackService(() => musicPlayerServices);
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Radio" component={RadioContent} />
                <Tab.Screen name="About" component={AboutUs} />
            </Tab.Navigator>
      </NavigationContainer>
    );
}

const AppContext = () => {
    const context = React.useContext(MyContext);

    return(
        <View style={styles.container}>
            <StatusBar style='light'/>
            <View style={styles.screensContainer}>
                <ScrollView contentContainerStyle={styles.scrollViewContainer} 
                    style={styles.scrollView}
                >
                    {/* <MyTabs/> */}
                    {context.RenderView()}
                </ScrollView>
                {context.screenView !== 1 && <WhatsAppButton/>}
                {context.screenView !== 1 && <SecondAudioControls/>}
            </View>

            <NavigationButtons/>
        </View>
    );
}

export default function App() {
    return (
        <MyProvider>
            <AppContext/>
        </MyProvider>
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

        alignItems: "center",
        justifyContent: "center",

        position: "relative",

        backgroundColor: "#242424",

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
