import { ScrollView, StyleSheet } from "react-native";

const ScrollViewContainer = ({ children }) => {
    return(
        <ScrollView contentContainerStyle={styles.scrollViewContainer} 
            style={styles.scrollView}
        >
            {children}
        </ScrollView>
    );
}

export { ScrollViewContainer };

const styles = StyleSheet.create({
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
