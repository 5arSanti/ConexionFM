import React from "react";
import { TouchableOpacity } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";
import { CommonActions } from "@react-navigation/native";
import { MyContext } from "../../Context";


const GoBackButton = () => {
    const context = React.useContext(MyContext)

    return(
        <TouchableOpacity 
            onPress={() => context.navigation.dispatch(CommonActions.goBack())} 
            style={{
                width: 50, 
                height: 50, 
                position: "absolute", 
                top: 10, 
                left: 15, 
        
                zIndex: 1,
        
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Ionicons name="arrow-back-outline" size={24} color="#FFF" />
        </TouchableOpacity>
    );
}

export { GoBackButton}