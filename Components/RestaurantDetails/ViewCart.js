import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import LottieView from "lottie-react-native";
// import firebase from "../../firebase";

export default function ViewCart({navigation}) {
  const [modalVisble, setmodalVisble] = useState(false);
  const [loading, setloading] = useState(false)

  const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  console.log(totalUSD);

   const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
       backgroundColor: "rgba(0,0,0,0.6)",
      margin:0
    },

    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      minHeight: 400,
      borderWidth: 1,
    },

    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
   });
  
  const addOrderToFireBase = () => {
    // const db = firebase.firestore();
    // db.collection("orders").add({
    //   items: items,
    //   restaurantName: restaurantName,
    //   created:firebase.firestore.FieldValue.serverTimestamp()
    // })
    setloading(true)
    setTimeout(() => {
      setloading(false)
      navigation.navigate("OrderCompleted",{restaurantName})
      // setmodalVisble(false)
    },2500)
  }

  const checkoutModelContent = () => {
    return (
      <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>${totalUSD}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => {
                  addOrderToFireBase();
                  setmodalVisble(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    top: 17,
                  }}
                >
                  {total ? "$"+totalUSD : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisble}
        transparent={true}
        onRequestClose={() => setmodalVisble(false)}
      >
        {checkoutModelContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 20,
            zIndex: 999,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 280,
                flexDirection: "row",
                position: "relative",
                
                justifyContent: "center",
              }}
              onPress={() => setmodalVisble(true)}
            >
              <Text style={{ color: "white",justifyContent:"center", marginRight: 30, fontSize: 20 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>$ {totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : 
        <></>
      }
       {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
