import { View, Text, Image } from 'react-native'
import React from 'react'

export default function About(props) {

    const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
          <ResImg img={image} />
          <ResTitle title={name} />
          <ResDesc desc={description}/>
    </View>
  )
}

const ResImg = (props) => (
    <Image source={{uri:props.img}} style={{width:"100%",height:220}}/>
)

const ResTitle = (props) => (
    <Text style={{ fontSize: 25, fontWeight: "800", marginTop: 10, marginHorizontal: 15 }}>{ props.title}</Text>
)
const ResDesc = (props) => (
    <Text style={{ fontSize: 15, fontWeight: "600", marginTop: 5, marginHorizontal: 15 }}>{ props.desc}</Text>
)