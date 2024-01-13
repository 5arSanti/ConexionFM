import { LinearGradient } from "expo-linear-gradient";

const GradientContainer = ({children, colors, padding, paddingTop, gap=20}) => {
    return(
        <LinearGradient 
            colors={colors}
            style={{
                width: "100%",
                height: "100%",
        
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: gap,
        
                padding: padding,
                paddingTop: paddingTop,
            }}
        >
            {children}
        </LinearGradient>
    );
}

export { GradientContainer };