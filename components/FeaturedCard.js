import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

/*
Komponen FeaturedCard
Digunakan untuk menampilkan stadion utama
seperti artikel populer pada aplikasi StadiumGo
*/

export default function FeaturedCard(){

  return(
    <View style={styles.card}>

      {/* gambar stadion */}
      <Image
        source={{
          uri:"https://i.pinimg.com/736x/17/31/f2/1731f23b36f7eb76bfb573a00b475ce7.jpg"
        }}
        style={styles.image}
      />

      {/* bagian teks */}
      <View style={styles.textBox}>

        {/* judul artikel */}
        <Text style={styles.title}>
          Exploring Stamford Bridge Stadium Tour
        </Text>

        {/* tanggal artikel */}
        <Text style={styles.date}>
          {new Date().toDateString()}
        </Text>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  card:{
    marginTop:20,
    borderRadius:15,
    overflow:"hidden",
    backgroundColor:"#fff",
    elevation:3
  },

  image:{
    width:"100%",   // supaya gambar memenuhi card
    height:200
  },

  textBox:{
    padding:15
  },

  title:{
    fontSize:18,
    fontWeight:"bold"
  },

  date:{
    color:"gray",
    marginTop:5
  }

});