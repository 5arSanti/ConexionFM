import React from "react";
import { StyleSheet, View } from "react-native";

import { MyContext } from "../../Context";
import { NavButton } from "../NavButton";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const NavigationButtons = () => {
    const context = React.useContext(MyContext);

    let color;
    const size = 40;

    const handleIcon = (viewNumber) => {
        if(context.screenView === viewNumber){
            return color = "#EFA50B";
        }
        else if (context.screenView !== viewNumber){
            return color = "#FFF";
        }
    }

    return(
        <View style={styles.buttonsContainer}>
            <NavButton 
                title={"Inicio"}
                onPress={() => {
                    context.navigation.navigate("Home");
                    context.setScreenView(1);
                }}
            >
                <MaterialCommunityIcons name="waveform" size={size} color={handleIcon(1)} />
            </NavButton>

            <NavButton 
                title={"Contenido"}
                onPress={() => {
                    context.navigation.navigate("RadioContent");
                    context.setScreenView(2);
                }}
            >
                <Ionicons name="md-radio" size={size} color={handleIcon(2)} />
            </NavButton>

            <NavButton 
                title={"Contacto"}
                onPress={() => {
                    context.navigation.navigate("AboutUs");
                    context.setScreenView(3);
                }}
            >
                <MaterialCommunityIcons name="account-group" size={size} color={handleIcon(3)} />
            </NavButton>
        </View>
    );
}

export { NavigationButtons };

const styles = StyleSheet.create({
    buttonsContainer: {
        width: "100%",

        borderRadius: 10,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    }
})