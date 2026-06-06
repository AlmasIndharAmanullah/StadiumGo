import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Profile() {

  const chelseaPosts = [
    "https://res.cloudinary.com/chelsea-production/image/upload/c_fit,h_630,w_1200/v1/editorial/match-reports/2025-26/PSG%20CWC%20final/Chelsea_win_the_FIFA_Club_World_Cup",
    "https://res.cloudinary.com/chelsea-production/image/upload/c_fit,h_630,w_1200/v1/The%205th%20Stand%20app%20editorial/GettyImages-2217547620",
    "https://img.chelseafc.com/image/upload/f_auto,c_fill,h_700,g_faces,ar_16:9,dpr_2.0,q_90/galleries/champions-league-final-2021/cl_final_trophy_lift.jpg"
  ];

  const arsenalPosts = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzharNw8Dx4GACFrjIFVPBXMzq5JDGjb6m0g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5jrlI1rtPkuDVJVwQplcL0p3cYrY52ibzg&s",
    "https://pbs.twimg.com/media/GpP-U50WYAAVqHT.jpg"
  ];

  const spursPosts = [
    "https://images.indianexpress.com/2026/03/Xavi-Simmons-Tottenham.jpg?w=1200",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOE_Q1RMAYQgm0OKAJb0hI4le5_aH6KAaHg&s",
    "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/76d1/live/7ada2910-36df-11f0-b84e-417dbe11adb9.jpg"
  ];

  return (
    <ScrollView style={styles.container}>

      {/* CHELSEA */}
      <Text style={styles.clubTitle}>Chelsea FC</Text>

      <View style={styles.header}>
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrmV02qvf23-K0fku98KfCLzfctVAdAfWCQ&s" }}
          style={styles.logo}
        />

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.number}>25.5K</Text>
            <Text>posts</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.number}>43.9M</Text>
            <Text>followers</Text>
          </View>
        </View>
      </View>

      <View style={styles.grid}>
        {chelseaPosts.map((img, i) => (
          <Image key={i} source={{ uri: img }} style={styles.post} />
        ))}
      </View>


      {/* ARSENAL */}
      <Text style={styles.clubTitle}>Arsenal FC</Text>

      <View style={styles.header}>
        <Image
          source={{ uri: "https://preview.redd.it/an-arsenal-meme-is-the-most-popular-post-of-all-time-on-the-v0-d7s7q6tav7kf1.jpeg?width=900&format=pjpg&auto=webp&s=d9fb663e442d4c90d5d69a10c2d8e2bc41e1b536" }}
          style={styles.logo}
        />

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.number}>20K</Text>
            <Text>posts</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.number}>35M</Text>
            <Text>followers</Text>
          </View>
        </View>
      </View>

      <View style={styles.grid}>
        {arsenalPosts.map((img, i) => (
          <Image key={i} source={{ uri: img }} style={styles.post} />
        ))}
      </View>


      {/* SPURS */}
      <Text style={styles.clubTitle}>Tottenham Hotspur</Text>

      <View style={styles.header}>
        <Image
          source={{ uri: "https://static.vecteezy.com/system/resources/previews/015/863/716/non_2x/tottenham-hotspur-logo-on-transparent-background-free-vector.jpg" }}
          style={styles.logo}
        />

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.number}>18K</Text>
            <Text>posts</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.number}>28M</Text>
            <Text>followers</Text>
          </View>
        </View>
      </View>

      <View style={styles.grid}>
        {spursPosts.map((img, i) => (
          <Image key={i} source={{ uri: img }} style={styles.post} />
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    backgroundColor:"#fff"
  },

  clubTitle:{
    fontSize:22,
    fontWeight:"bold",
    marginTop:25,
    marginBottom:10
  },

  header:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:10
  },

logo:{
  width:70,
  height:70,
  borderRadius:35
},

  stats:{
    flexDirection:"row",
    marginLeft:20
  },

  stat:{
    marginRight:20,
    alignItems:"center"
  },

  number:{
    fontWeight:"bold",
    fontSize:16
  },

  grid:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between"
  },

  post:{
    width:"32%",
    height:100,
    marginBottom:8
  }

});