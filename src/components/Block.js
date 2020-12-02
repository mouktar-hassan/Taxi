import React from 'react';
import { View, Text, StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get("window");//pour récuperer la largeur et l'hauteur de l'écran=> const {width, height} = Dimensions.get("window");
const Block = ({children}) => {
    const {container} = styles;
    return(
        <View style={container} >
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        width:width *4/3, //*4/3 : une stimation pour élargir le bordure
        backgroundColor: "#2dbb54",
        flexGrow: 3,//pour dire Block est 3 fois plus au porportion par rapport aux autres du composant LoginScreen
        borderBottomLeftRadius: width,
        borderBottomRightRadius: width,
        justifyContent:"center",
        alignItems:"center"
    }

})

export default Block;