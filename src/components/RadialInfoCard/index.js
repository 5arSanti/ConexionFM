import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { useIsFocused } from "@react-navigation/native";

import { MyContext } from "../../Context";
import { ScrollViewContainer } from "../ScrollViewContainer";
import { EmisionCard } from "./EmisionCard";
import { GradientContainer } from "../GradientContainer";
import { Title } from "../Title";


const RadialInfoCard = ({route}) => {
    const context = React.useContext(MyContext);
    const data = route.params.data;

    const isFocused = useIsFocused();

    React.useEffect(() => {
        if (isFocused) {
            context.setScreenView(4);
        }
    }, [isFocused]);

    return(
        <ScrollViewContainer>
            <GradientContainer 
                colors={["#434343", "#000000"]} 
                padding={0} 
                paddingTop={0}
            >
                <View style={styles.radialInfoCardContainer}>

                    <View style={{position: "relative", width: "100%", height: 400}}>
                        <Image source={data.image} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                        <Text style={styles.radialTitle}>{data.name}</Text>
                    </View>
                    

                    <View style={{paddingHorizontal: 20, gap: 20, alignItems: "center"}}>
                        <Title title={"Sobre el Programa"} color={"#FFF"} borderColor={"#EFA50B"}/>
                        <Text style={styles.radialInfoText}>{data.info}</Text>
                    </View>

                    <View style={{paddingHorizontal: 20, marginTop: 30, marginBottom: 20, gap: 20, alignItems: "center"}}>

                        <Title title={"Dias de emisión"} color={"#FFF"} borderColor={"#EFA50B"}/>
                        <View style={styles.emisionDaysGrid}>
                            {data.emision.map((data) => (
                                <EmisionCard
                                    key={data.id}
                                    data={data}
                                />
                            ))}
                        </View>
                    </View>

                </View>
            </GradientContainer>
        </ScrollViewContainer>
    );
}

export { RadialInfoCard };

const styles =  StyleSheet.create({
    radialInfoCardContainer: {
        flex: 1,
        flexGrow: 1,
        width: "100%",
        height: "100%",

        gap: 20,
        // alignItems: "center",
        flexDirection: "column",

        position: "relative"
    },
    radialTitle: {
        position: "absolute", 
        bottom: 15, 
        left: 25,

        color: "#000",

        fontSize: 20,
        fontFamily: "Questrial",
        fontStyle: "italic",

        paddingVertical: 3,
        paddingHorizontal: 30,
        
        backgroundColor: "rgba(255,255,255,0.9)",
        
        borderRadius: 20,
    },
    radialInfoText: {
        color: "#FFF",
        fontSize: 18,
        fontFamily: "Questrial",
        textAlign: "justify",
    },
    emisionDaysGrid: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 10,
        paddingHorizontal: 20,
    }
})