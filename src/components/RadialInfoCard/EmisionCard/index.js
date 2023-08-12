import { Text, View, StyleSheet } from "react-native";

const EmisionCard = (data) => {
    return(
        <View style={{
            paddingHorizontal: 20,
            paddingVertical: 10,

            backgroundColor: "rgba(255,255,255, 0.25)",
            borderRadius: 10,
        }}>
            <Text style={{color: "#FFF", fontSize: 16,}}>{data.data?.day}</Text>
            <View style={{display: "flex", flexDirection: "row"}}>
                <Text style={styles.text}>{data.data?.start} - </Text>
                <Text style={styles.text}>{data.data?.end}</Text>
            </View>
        </View>
    );
}

export { EmisionCard };

const styles = StyleSheet.create({
    text: {
        color: "#FFF",
        fontStyle: "italic",
    }
})