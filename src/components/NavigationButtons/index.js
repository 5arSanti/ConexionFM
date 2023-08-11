import React from "react";
import { StyleSheet, View } from "react-native";

import { MyContext } from "../../Context";
import { NavButton } from "../NavButton";


const NavigationButtons = () => {
    const context = React.useContext(MyContext);

    const handleIcon = (icon, iconActive, viewNumber) => {
        if(context.screenView === viewNumber){
            return iconActive;
        }
        else if (context.screenView !== viewNumber){
            return icon;
        }
    }

    return(
        <View style={styles.buttonsContainer}>
            <NavButton
                title={"Inicio"}
                onPress={() => {
                    context.setScreenView(1)
                    context.navigation.navigate("Home")
                    console.log("HOme")
                }}
                iconName={handleIcon(context.icons.home, context.icons.homeActive, 1)}
            />
            <NavButton
                title={"Contenido"}
                onPress={() => {
                    context.setScreenView(2)
                    context.navigation.navigate("RadioContent")
                    console.log("RadioContent")
                }}
                iconName={handleIcon(context.icons.radio, context.icons.radioActive, 2)}
            />
            <NavButton
                title={"Contacto"}
                onPress={() => {
                    context.setScreenView(3)
                    context.navigation.navigate("AboutUs")
                    console.log("AboutUs")
                }}
                iconName={handleIcon(context.icons.about, context.icons.aboutActive, 3)}
            />
        </View>
    );
}

export { NavigationButtons };

const styles = StyleSheet.create({
    buttonsContainer: {
        width: "100%",
        height: "10%",

        borderRadius: 10,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 25,
    }
})