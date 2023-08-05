import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const GradientContainer = ({children, colors}) => {
    return(
        <LinearGradient 
            colors={colors}
            style={styles.homeContainer}
        >
            {children}
        </LinearGradient>
    );
}

export { GradientContainer };


const styles = StyleSheet.create({
    homeContainer: {
        width: "100%",
        height: "100%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,

        padding: 20,
        paddingTop: 40,
    }
})