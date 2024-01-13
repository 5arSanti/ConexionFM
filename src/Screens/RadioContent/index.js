import React from "react";
import { Image, StyleSheet, View, TouchableOpacity} from "react-native";

import { ConexionLogo } from "../../components/ConexionLogo";
import { Title } from "../../components/Title";
import { GradientContainer } from "../../components/GradientContainer";
import { ImageCarrousel } from "../../components/ImageCarrousel";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import { useIsFocused } from "@react-navigation/native";
import { MyContext } from "../../Context";
import { AdCarrousel } from "../../components/AdCarrousel";

const RadioContent = () => {
    const context = React.useContext(MyContext);

    const isFocused = useIsFocused();

    React.useEffect(() => {
        if (isFocused) {
            context.setScreenView(2);
        }
    }, [isFocused]);

    return(
        <ScrollViewContainer>
            <GradientContainer 
                colors={["#5B5B5B", "#000000"]}
                padding={0}
                paddingTop={40}
                gap={25}
            >
                <View style={styles.container}>
                    <ConexionLogo/>
                    <Title 
                        title={"Contenido Radial"} 
                        color={"#FFF"}
                        borderColor={"white"}
                    />
                </View>

                <ImageCarrousel/>
                <AdCarrousel
                    padding={20}
                />

                <View style={styles.container}>
                    <Title 
                        title={"Descubre más!"} 
                        color={"#FFF"}
                        borderColor={"white"}
                    />

                    <TouchableOpacity
                        onPress={() => {context.handleOpenSocialMedia("https://www.conexion.fm/")}}
                        style={styles.imageContainer}
                    >
                        <Image 
                            style={{width: "100%", objectFit: "cover", height: 400, marginBottom: 20,}} 
                            source={require("../../../assets/logos/ConexionFMv3.png")}
                        />
                    </TouchableOpacity>

                </View>
            </GradientContainer>
        </ScrollViewContainer>
    );
}
export { RadioContent };

const styles = StyleSheet.create({
    container: {
        width: "100%", 

        display: "flex",
        alignItems: "center",
        gap: 20,

        paddingHorizontal: 20,
    },
    imageContainer: {
        width: "100%",
        // paddingHorizontal: 10,
    }
})