import React from "react";
import { ScrollView, StyleSheet, RefreshControl } from "react-native";
import { MyContext } from "../../Context";

const ScrollViewContainer = ({ children }) => {
    const context = React.useContext(MyContext)

    return(
        <ScrollView contentContainerStyle={styles.scrollViewContainer} 
            style={styles.scrollView}
            refreshControl={<RefreshControl refreshing={context.refreshing} onRefresh={context.onRefresh}/>}
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
        height: "100%",
    }
});
