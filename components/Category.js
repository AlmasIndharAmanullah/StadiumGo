import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";

/*
Komponen Category
Menampilkan kategori stadion dan
mengubah warna tombol saat dipilih
*/

export default function Category({ setSelectedClub }){

  const categories = ["Chelsea","Arsenal","Spurs"];

  // state untuk menyimpan tombol yang dipilih
  const [activeButton, setActiveButton] = useState("");

  const handlePress = (club) => {
    setActiveButton(club);
    setSelectedClub(club);
  };

  return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

      {categories.map((item,index)=>{

        const isActive = activeButton === item;

        return(
          <TouchableOpacity
            key={index}
            style={[
              styles.btn,
              isActive && styles.activeBtn
            ]}
            onPress={()=> handlePress(item)}
          >
            <Text
              style={[
                styles.text,
                isActive && styles.activeText
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )

      })}

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  btn:{
    backgroundColor:"#e0e0e0",
    padding:10,
    borderRadius:20,
    marginRight:10
  },

  activeBtn:{
    backgroundColor:"#1e90ff"
  },

  text:{
    fontWeight:"bold"
  },

  activeText:{
    color:"#fff"
  }

});