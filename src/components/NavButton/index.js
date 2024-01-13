import React from "react";

import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";


const NavButton = ({onPress, title, children}) => {

    return(
        <TouchableOpacity
            onPress={() => onPress()}
            style={styles.button}
        >
            {children}
            <Text 
                style={{color: "white", fontSize: 14, fontFamily: "Questrial"}}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export { NavButton };

const styles = StyleSheet.create({
    button: {
        width: 85,
        padding: 10,

        backgroundColor: "#464646",
        borderRadius: 13,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})