import React, { useRef } from "react";
import { View, Text, FlatList, StyleSheet, Image, Animated } from "react-native";
import { stadiums } from "../data/stadiums";

export default function Home() {

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>StadiumGo</Text>

      <Animated.FlatList
        data={stadiums}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}

        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}

        renderItem={({ item, index }) => {

          const inputRange = [
            -1,
            0,
            200 * index,
            200 * (index + 2)
          ];

          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0.9],
          });

          return (
            <Animated.View style={[styles.card, { opacity, transform: [{ scale }] }]}>

              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />

              <View style={styles.info}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.club}>{item.club}</Text>
              </View>

            </Animated.View>
          );
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    backgroundColor:"#fff"
  },

  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:15
  },

  card:{
    backgroundColor:"#f2f2f2",
    borderRadius:12,
    marginBottom:15,
    overflow:"hidden"
  },

  image:{
    width:"100%",
    height:180
  },

  info:{
    padding:10
  },

  name:{
    fontSize:16,
    fontWeight:"bold"
  },

  club:{
    fontSize:14,
    color:"#666"
  }

});