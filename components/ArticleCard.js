
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

/*
Komponen ArticleCard
Menampilkan list artikel stadion
*/

export default function ArticleCard({title,club,image}){

  return(
    <View style={styles.card}>

      <Image source={{uri:image}} style={styles.image}/>

      <View style={{flex:1}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.club}>{club}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  card:{
    flexDirection:"row",
    marginTop:15,
    backgroundColor:"#fff",
    borderRadius:10,
    padding:10
  },

  image:{
    width:80,
    height:80,
    borderRadius:10,
    marginRight:10
  },

  title:{
    fontSize:16,
    fontWeight:"bold"
  },

  club:{
    color:"gray",
    marginTop:5
  }

})
