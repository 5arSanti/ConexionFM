import { Text, View, StyleSheet } from "react-native";

const EmisionCard = (data) => {
    return(
        <View style={{
            paddingHorizontal: 20,
            paddingVertical: 10,

            backgroundColor: "rgba(239,165,1, 0.75)",
            borderRadius: 10,
        }}>
            <Text style={{color: "#FFF", fontSize: 16, fontWeight: "bold"}}>{data.data?.day}</Text>
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