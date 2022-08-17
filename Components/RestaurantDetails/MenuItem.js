import { View, Text, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

export default function MenuItem({ restaurantName, food, hidecheckbox, marginleft }) {
  
  const dispath = useDispatch();

  const selectItem = (item,checkboxvalue) =>
  dispath({
    type: "ADD_TO_CART",
    payload: { ...item, restaurantName: restaurantName,checkboxvalue:checkboxvalue }
  })

  const cartitems = useSelector(state => state.cartReducer.selectedItems.items)
  
  const isfoodincart = (food, cartitems) => {
    return Boolean(cartitems.find((item)=>item.title===food.title))
  }

  return (
    <View >
      {food.map((food, index) => (
       <View key={index}>
        <View
          
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 12,
            marginVertical: 10,
            width: "90%",
            justifyContent: "center",
            alignItems:"center",
            // flex:1,
            // padding:5,
            // borderColor: "black"
            
          }}
          >
             <BouncyCheckbox isChecked={isfoodincart(food, cartitems)} onPress={(check) => selectItem(food, check)} iconStyle={{marginLeft:10, borderColor: "lightgray", borderRadius: 0 }}
            fillColor="green" />
            
           
            <FoodInfo food={food} />
          <Foodimg food={food} marginleft={marginleft?marginleft:0} />
        </View>
          <Divider width={0.5} style={{marginHorizontal:20}} orientation="vertical" />
         </View>
      ))}
    </View>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 220,paddingRight:14, justifyContent: "space-evenly" }}>
    <Text style={{fontSize: 20,
    fontWeight: "700",}}>{props.food.title}</Text>
    <Text style={{fontWeight:"500", fontSize:15}}>{props.food.description}</Text>
    <Text style={{fontWeight:"600", fontSize:16}}>{props.food.price}</Text>
    </View>
);

const Foodimg = (props) => (
  <View>
    <Image
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: props.marginleft,
        right: 4,
        position:"relative"
      }}
      source={{ uri: props.food.image }}
    />
  </View>
);
