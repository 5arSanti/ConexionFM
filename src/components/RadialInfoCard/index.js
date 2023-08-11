import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MyContext } from "../../Context";

const RadialInfoCard = (data) => {
    const context = React.useContext(MyContext);

    return(
        <View style={styles.radialInfoCardContainer}>
            <View>
                <Image source={data.image}/>
                <Text>{data.name}</Text>
            </View>
            <View>
                {data.data?.emision.map((item) => {
                    <EmisionCard
                        key={item.id}
                        data={item}
                    />
                })}
            </View>
            <Text>{data.data?.info}</Text>
        </View>
    );
}

export { RadialInfoCard };

const styles =  StyleSheet.create({
    radialInfoCardContainer: {
        backgroundColor: "#FFF",
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
    }
})