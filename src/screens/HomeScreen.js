import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import Block from "../components/Block";
import Title from "../components/Title";
import RoundBtn from "../components/RoundBtn";
import { Ionicons } from "@expo/vector-icons";
import { prefix } from "../../src/utils/helpers";

const { width } = Dimensions.get("window");
const HomeScreen = (props) => {
  const { container, container_2, icon, titleContainer, roundBtnContainer } = styles;
  return (
    <View style={container}>
      <Block>
        <Ionicons name={`${prefix}-car`} style={icon} />
        <Title content="TAXI APP" size="big" />
      </Block>
      <View style={container_2}>
        <View style={titleContainer}>
          <Title content="Bienvenu" size="small" />
          <Title content="Vous recherchez Un" size="medium" />
        </View>
      </View>
      <View style={roundBtnContainer} >
        <RoundBtn iconName={`${prefix}-car`} />
        <RoundBtn iconName={`${prefix}-person`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  icon: {
    fontSize: 80,
    color: "white",
  },
  container_2: {
    flexGrow: 1,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    width: width - 80,
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  roundBtnContainer:{
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width -80
}
});

export default HomeScreen;
