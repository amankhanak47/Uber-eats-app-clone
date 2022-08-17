import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Headertabs from "../Components/Home/Headertabs";
import Searchbar from "../Components/Home/Searchbar";
import Catogories from "../Components/Home/Catogories";
import RestaurentItem, { localrestaurant } from "../Components/Home/RestaurentItem";
import BottomTabs from "../Components/Home/BottomTabs";
// import { Divider } from "react-native-elements/dist/divider/Divider";
import { Divider } from "react-native-elements";
// import { Divider } from "react-native-elements";

const YELP_API_KEY =
  "UNLVFlBXDLbwNl044uNK0ckllBCnyhgCLWkS7GzWtYKMCJ6zWrHTfoRRTGTE4mKalreAjnMq1cjfgtcljpF1N1CT5nzxVmd85liMRq4KCTgQHKrDMJz1SAdlnoP2YnYx";
// const YELP_API_KEY =
//   "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";
export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localrestaurant);
  const [city, setCity] = useState("Las vegas");
  const [activetab, setActivetab] = useState("Delivery");
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activetab.toLowerCase())
          )
        )
      );
  };
  // console.log(restaurantData)

  useEffect(() => {
    try {
      getRestaurantsFromYelp();
      console.log(restaurantData[0].isclosed);
    } catch {
      console.log("error");
    }
  }, [city,activetab]);

  return (
    <View style={{ marginTop: 33, backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <Headertabs activetab={activetab} setActivetab={setActivetab} />
        <Searchbar cityhandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Catogories />
        <RestaurentItem Restaurentitem={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs/>
    </View>

  );
}
