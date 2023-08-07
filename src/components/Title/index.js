import { Text } from "react-native";

const Title = ({title, color, borderColor}) => {
    return(
        <Text style={{
            width: "90%", 
            padding: 1,

            color: color, 

            fontSize: 17,
            fontFamily: "Questrial", 

            textAlign: "center",

            borderLeftColor: borderColor,
            borderLeftWidth: 2,
        }}>
            {title}
        </Text>
    );
}

export { Title };