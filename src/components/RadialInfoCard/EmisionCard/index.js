import { Text, View } from "react-native";

const EmisionCard = (data) => {
    return(
        <View>
            <Text>{data.data?.day}</Text>
            <View>
                <Text>{data.data?.start}</Text>
                <Text>{data.data?.end}</Text>
            </View>
        </View>
    );
}

export { EmisionCard };