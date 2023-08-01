import React from "react";

import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";


const NavButton = ({onPress, title, iconName}) => {

    return(
        <TouchableOpacity
            onPress={() => onPress()}
            style={styles.button}
        >
            <Image source={iconName}
                style={{width: 35, height: 35, objectFit: "cover"}}
            />
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
        height: 78,

        backgroundColor: "#464646",
        borderRadius: 13,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})