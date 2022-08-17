import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Ico from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

export default function Searchbar({cityhandler}) {
  const [place, setPlace] = useState("");
  return (
    <View
      style={{
        borderColor: "#eee",
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 10,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor:"#eee"
      }}
    >
      <RenderLeftButton />
      <TextInput
        placeholder="Search"
        style={{
          flex: 1,
          paddingHorizontal: 5,
        }}
        onChangeText={(val) => setPlace(val)}
      />
      <RenderRightButton cityhandler={cityhandler} place={place} />
    </View>
  );
}

const RenderLeftButton = () => (
  <View style={{ marginLeft: 10 }}>
    {/* <Ionicons name='location-sharp' size={24}/> */}
    <Ico name="location-sharp" size={25} />
  </View>
);
const RenderRightButton = (props) => (
  <TouchableOpacity onPress={() => {
     props.cityhandler(props.place) 
    console.log(props.place)
  }}>

  <View
      style={{
      
      flexDirection: "row",
      marginRight: 8,
        backgroundColor: "white",
      margin:5,
      
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 30,
      alignItems: "center",
    }}
    >
    <Icon name="clockcircle" style={{ marginRight: 6 }} size={12} />
    <Text>Search</Text>
  </View>
    </TouchableOpacity>
);
