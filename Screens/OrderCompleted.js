import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { Divider } from "react-native-elements";

export default function OrderCompleted() {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <View style={{ marginTop: 31, backgroundColor: "white", flex: 1 }}>
      <LottieView
        style={{ height: 100, alignSelf: "center", margin: 10 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text
        style={{
          alignSelf: "center",
          fontSize: 20,
          fontWeight: "800",
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        Your Order at {restaurantName} has been placed for ${total}
      </Text>

      <ScrollView>
        {items.map((item, index) => (
          <View key={index} style={{ flexDirection: "column" }}>
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginVertical: 10,
                // width: "100%",
                // justifyContent: "center",
                alignItems: "center",

                // flex:1,
                //     // padding:5,
                //     // borderColor: "black"
              }}
            >
              <FoodInfo food={item} />
              <Foodimg food={item} />
            </View>
            <Divider
              width={1}
              style={{ marginHorizontal: 20 }}
              orientation="vertical"
            />
          </View>
        ))}
        <LottieView
          style={{ height: 200, alignSelf: "center", margin: 20 }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
        />
      </ScrollView>
    </View>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, marginRight: 14, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 19, fontWeight: "700" }}>{props.food.title}</Text>
    <Text style={{ fontWeight: "500", fontSize: 15 }}>
      {props.food.description}
    </Text>
    <Text style={{ fontWeight: "600", fontSize: 16 }}>{props.food.price}</Text>
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
        position: "relative",
      }}
      source={{ uri: props.food.image }}
    />
  </View>
);
