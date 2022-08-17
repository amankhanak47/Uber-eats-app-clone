import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Headertabs(props) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        btncolor="black"
        txtcolor="white"
        text="Delivery"

        activeTab={props.activetab}
        setActiveTab={props.setActivetab}
      />
      <HeaderButton
        btncolor="white"
        txtcolor="black"
        text="Pickup"
        activeTab={props.activetab}
        setActiveTab={props.setActivetab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 7,
      paddingHorizontal: 25,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
    >
    <Text
      style={{
        
        color: props.activeTab === props.text ? "white" : "black",
        fontSize: 17,
        fontWeight: "bold",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
