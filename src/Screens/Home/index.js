import { StyleSheet, Text, View,} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
    return(
        <LinearGradient 
            colors={["#FFFFFF", "#BABABA"]}
            style={styles.homeContainer}
        >
            <Text style={{fontFamily: "Simple"}}>Hola</Text>
        </LinearGradient>
    );
}
export { Home };

const styles = StyleSheet.create({
    homeContainer: {
        width: "100%",
        height: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})