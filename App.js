import React, { useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import Category from "./components/Category";
import FeaturedCard from "./components/FeaturedCard";
import ArticleCard from "./components/ArticleCard";
import { stadiums } from "./data/stadiums";

/*
Komponen utama aplikasi StadiumGo
Menggunakan state untuk menyimpan kategori stadion yang dipilih
*/

export default function App(){

  // STATE
  const [selectedClub, setSelectedClub] = useState("All");

  // FILTER DATA BERDASARKAN STATE
  const filteredStadiums =
    selectedClub === "All"
      ? stadiums
      : stadiums.filter((item) => item.club.includes(selectedClub));

  return(
    <ScrollView style={styles.container}>

      <Text style={styles.header}>StadiumGo</Text>

      {/* props: mengirim fungsi setSelectedClub */}
      <Category setSelectedClub={setSelectedClub} />

      <FeaturedCard />

      {/* props: mengirim data stadion */}
      {filteredStadiums.map((item,index)=>(
        <ArticleCard
          key={index}
          title={item.title}
          club={item.club}
          image={item.image}
        />
      ))}

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container:{
    padding:15,
    backgroundColor:"#f5f5f5"
  },

  header:{
    fontSize:28,
    fontWeight:"bold",
    marginTop:40,
    marginBottom:10
  }

});