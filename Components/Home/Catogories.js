import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text:"Pick-up"
  },
  {
    image: require("../../assets/images/bread.png"),
    text:"Bakery Items"
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text:"Fast Foods"
  },
  {
    image: require("../../assets/images/deals.png"),
    text:"Deals"
  },
  {
    image: require("../../assets/images/coffee.png"),
    text:"Coffee & Tea"
  },
  
]

export default function Catogories() {
  return (
    <View style={{marginTop:5,backgroundColor:"white",paddingVertical:10, paddingLeft:20}}>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      {items.map((e,index) =>
        <View key={index}  style={{ alignItems:"center", marginRight:30}}>
      <Image source={e.image} style={{
        width: 50,
        height: 50,
        resizeMode:"contain"
      }} />
      <Text style={{ fontSize: 13, fontWeight: "900" }}>{e.text}</Text>
      </View>
      
        )}
      </ScrollView>
      </View>
  )
}