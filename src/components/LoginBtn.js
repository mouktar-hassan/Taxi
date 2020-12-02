import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import Logo from "../../assets/images/google.png";
import Title from "./Title";

const {width} = Dimensions.get("window");
const LoginBtn = ({onPress}) => {
    const {container ,logo} = styles;
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={container} >
        <Title size="small" content="Google Connexion" />
        <Image style={logo} source={Logo} />
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-around",//à dire affichier l'un à gauche (titre google) et l'autre à droite (logo) et un space width -80 entre les deux
        width: width -80,
        alignItems:"center",
        height: 55,
        //configuration pour le shadow
        shadowColor:"#000",//noir,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor:"white",
        elevation: 5,
    },
    logo:{
        width:40,
        height:40
    }

})
export default LoginBtn;
