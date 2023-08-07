import { StyleSheet, Text, View } from "react-native";
import { MyContext } from "../../Context";
import React from "react";
import { RadialContentCard } from "../RadialContentCard";

const ImageCarrousel = () => {
    const context = React.useContext(MyContext);

    return(
        <View style={styles.carrouselContainer}>
            {context.radial?.map((item) => 
                <RadialContentCard
                    key={item.id}
                    data={item}
                /> 
            )}
        </View>
    );
}

export { ImageCarrousel }

const styles = StyleSheet.create({
    carrouselContainer: {
        flex: 1,
        width: "100%",
        height: 400,

        justifyContent: "center",
        alignContent: "center",

        backgroundColor: "white",
    }
})