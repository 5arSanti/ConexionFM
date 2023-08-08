import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';


import { MyProvider, MyContext } from './src/Context';
import { NavigationButtons } from './src/components/NavigationButtons';
import { SecondAudioControls } from './src/components/SecondAudioControls';
import { WhatsAppButton } from './src/components/WhatsAppButton';

export default function App() {
    return (
        <MyProvider>
            <AppContext/>
        </MyProvider>
    );
}

const AppContext = () => {
    const context = React.useContext(MyContext);

    return(
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <View style={styles.screensContainer}>
                <ScrollView contentContainerStyle={styles.scrollViewContainer} 
                    style={styles.scrollView}
                >
                    {context.RenderView()}
                </ScrollView>
                {context.screenView !== 1 && <WhatsAppButton/>}
                {context.screenView !== 1 && <SecondAudioControls/>}
            </View>

            <NavigationButtons/>
        </View>
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
