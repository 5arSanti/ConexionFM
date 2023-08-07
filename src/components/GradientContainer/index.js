import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const GradientContainer = ({children, colors, padding}) => {
    return(
        <LinearGradient 
            colors={colors}
            style={{
                width: "100%",
                height: "100%",
        
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
        
                padding: padding,
                paddingTop: 40,
            }}
        >
            {children}
        </LinearGradient>
    );
}

export { GradientContainer };