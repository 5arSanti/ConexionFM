import { Image, View } from "react-native";

const RadialInfoCard = ({route}) => {
    const { item } = route.params;
    return(
        <View>
            <View>
                <Image source={item.image}/>
                <Text>{item.name}</Text>
            </View>
            <View>
                {item.emision.map((item) => {
                    <EmisionCard
                        key={item.id}
                        data={item}
                    />
                })}
            </View>
            <Text>{item.info}</Text>
        </View>
    );
}

export { RadialInfoCard };