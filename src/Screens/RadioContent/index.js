import React from "react";
import { Image, StyleSheet, View,} from "react-native";
import { ConexionLogo } from "../../components/ConexionLogo";
import { Title } from "../../components/Title";
import { GradientContainer } from "../../components/GradientContainer";
import { ImageCarrousel } from "../../components/ImageCarrousel";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import { useIsFocused } from "@react-navigation/native";
import { MyContext } from "../../Context";

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
                colors={["#434343", "#000000"]}
                padding={0}
                paddingTop={40}
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
                <View style={styles.container}>
                    <Title 
                        title={"Descubre más!"} 
                        color={"#FFF"}
                        borderColor={"white"}
                    />
                    <Image style={{flex: 1, width: "100%", objectFit: "contain", height: 400, marginBottom: 20,}} source={require("../../../assets/logos/ConexionFMv3.png")}/>
                </View>
            </GradientContainer>
        </ScrollViewContainer>
    );
}
export { RadioContent };

const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        width: "100%", 
        alignItems: "center",
        gap: 20,

        paddingHorizontal: 20,
    }
})