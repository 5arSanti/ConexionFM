import React from "react";
import { StyleSheet, View } from "react-native";

import { MyContext } from "../../Context";
import { NavButton } from "../NavButton";


const NavigationButtons = () => {
    const context = React.useContext(MyContext);

    const iconMap = {
        home: require("../../../assets/nav-icons/home-icon.png"),
        radio: require("../../../assets/nav-icons/radio-icon.png"),
        about: require("../../../assets/nav-icons/about-icon.png")
    }

    return(
        <View style={styles.buttonsContainer}>
            <NavButton
                title={"Inicio"}
                onPress={() => context.setScreenView(1)}
                iconName={iconMap.home}
            />
            <NavButton
                title={"Contenido"}
                onPress={() => context.setScreenView(2)}
                iconName={iconMap.radio}
            />
            <NavButton
                title={"Contacto"}
                onPress={() => context.setScreenView(3)}
                iconName={iconMap.about}
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