import Carousel, { Pagination } from "react-native-snap-carousel";
import { MyContext } from "../../Context";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const AdCarrousel = ({padding = 0}) => {
    const context = React.useContext(MyContext);
    const adsCarouselRef = React.useRef();

    const screenWidth = Dimensions.get("window").width - 80;

    const renderImage = (data) => {
        return(
            <TouchableOpacity 
                onPress={() => {
                    context.navigation.navigate("RadialInfoCard", {data: data.item})
                }}
                style={styles.adTouchableContainer}
            >
                <Image 
                    source={data.item?.image} 
                    style={styles.image}
                />
            </TouchableOpacity>
        );
    }

    return (
        <View 
            style={{ 
                paddingHorizontal: padding, 
                height: 200
            }}>
            <View style={styles.carrouselContainer}>
                <Carousel
                    ref={adsCarouselRef}
                    data={context.ads}
                    renderItem={renderImage}

                    sliderWidth={screenWidth}
                    itemWidth={screenWidth}
                    loop={true}

                    autoplay={true}
                    autoplayInterval={3000}

                    enableMomentum={false}
                    lockScrollWhileSnapping={true}

                    layout="default"
                />

                <Text style={styles.carouselText}>Publicidad</Text>
            </View>
        </View>
        
    );
}

export { AdCarrousel };


const styles = StyleSheet.create({
    carrouselContainer: {
        flex: 1,
        width: "100%",
        height: 200,

        position: "relative",

        justifyContent: "center",
        alignContent: "center",

        backgroundColor: "transparent",
        overflow: "hidden",

        borderRadius: 20,
    },
    adTouchableContainer: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    image : {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    carouselText: {
        position: "absolute",
        bottom: 10,
        left: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,

        backgroundColor: "rgba(239,165,11,0.75)",

        borderRadius: 5,
        color: "#FFF"
    }

})