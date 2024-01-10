import React from "react";

import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { MyContext } from "../../Context";
import Carousel, { Pagination } from "react-native-snap-carousel";

const ImageCarrousel = () => {
    const context = React.useContext(MyContext);
    const radialCarouselRef = React.useRef();

    const screenWidth = Dimensions.get("window").width - 40;

    const renderImage = (item) => {
        return(
            <TouchableOpacity 
                onPress={() => {
                    context.navigation.navigate("RadialInfoCard", {data: item.item})
                }}
            >
                <Image 
                    source={item.item?.image} 
                    style={{width: "100%", height: "100%", objectFit: "cover"}}
                />
            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.carrouselContainer}>
            <Carousel
                ref={radialCarouselRef}
                data={context.radial}
                renderItem={renderImage}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}

                loop
                autoplay={true}
                autoplayInterval={4000}

                enableMomentum={false}
                lockScrollWhileSnapping={true}

                layout="default"
                onSnapToItem={(index) => {context.setActiveCard(index)}}
            />

            <View style={styles.paginationContainerContainer}>
                <Pagination
                    dotsLength={context.radial.length}
                    activeDotIndex={context.activeCard}


                    dotColor="#EFA50B"
                    dotStyle={styles.paginationDot}

                    inactiveDotColor="#EFA50B"
                    inactiveDotOpacity={0.5}
                    inactiveDotScale={0.5}

                    carouselRef={radialCarouselRef}
                    tappableDots={true}
                />
            </View>
        </View>
    );
}

export { ImageCarrousel };

const styles = StyleSheet.create({
    carrouselContainer: {
        flex: 1,
        width: "100%",
        height: 375,

        position: "relative",

        justifyContent: "center",
        alignContent: "center",

        backgroundColor: "transparent"
    },
    paginationContainerContainer: {
        width: "100%", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        position: "absolute", 
        bottom: 0,
    },
    paginationDot: {
        width: 12,
        height: 12,
        borderRadius: 100,
    }

})