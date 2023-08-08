import { StyleSheet, View } from "react-native";
import { MyContext } from "../../../Context";
import React from "react";
import { SocialMediaCard } from "../SocialMediaCard";

const SocialMediaContainer = () => {
    const context = React.useContext(MyContext)

    return(
        <View style={styles.socialMediaGrid}>
            {context.socialMedia?.map((item) => (
                <SocialMediaCard
                    key={item.id}
                    data={item}
                />
            ))}
        </View>
    );
}

export { SocialMediaContainer };

const styles = StyleSheet.create({
    socialMediaGrid: {
        flex: 1,
        gap: 20,

        width: "100%",
        height: "auto",

        alignItems: "center"
    }
})