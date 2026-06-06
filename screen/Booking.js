import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput
} from "react-native";

import { stadiums } from "../data/stadiums";
import { supabase } from "../lib/supabase";

export default function Booking() {

  const [selected, setSelected] =
  useState(null);

  const [name, setName] =
  useState("");

  const [email, setEmail] =
  useState("");

  const [ticket, setTicket] =
  useState("");

  const handleBooking =
  async () => {

    if (!selected) {

      Alert.alert(
        "Warning",
        "Please select stadium first"
      );

      return;
    }

    if (
      name === "" ||
      email === "" ||
      ticket === ""
    ) {

      Alert.alert(
        "Warning",
        "Please fill all form"
      );

      return;
    }

    try {

      const { error } =
      await supabase
      .from("booking")
      .insert([
        {
          name: name,
          email: email,
          ticket:
          Number(ticket),
          stadium:
          selected.title
        }
      ]);

      if (error)
      throw error;

      Alert.alert(
        "Booking Success",
        `Name : ${name}

Email : ${email}

Ticket : ${ticket}

Stadium :
${selected.title}`
      );

      setName("");
      setEmail("");
      setTicket("");
      setSelected(null);

    } catch (error) {

      console.log(error);

      Alert.alert(
        "Error",
        "Failed save booking"
      );
    }
  };

  return (

    <ScrollView
    style={styles.container}
    >

      <Text
      style={styles.title}
      >
      Booking Stadium
      </Text>

      <Text
      style={styles.subtitle}
      >
      Choose your stadium
      </Text>

      {stadiums.map(
      (item,index)=>(

      <TouchableOpacity

      key={index}

      style={[
      styles.card,

      selected?.title
      === item.title
      &&
      styles.selected
      ]}

      onPress={()=>
      setSelected(item)
      }

      >

      <Image
      source={{
      uri:item.image
      }}
      style={
      styles.image
      }
      />

      <View
      style={styles.info}
      >

      <Text
      style={
      styles.stadium
      }
      >
      {item.title}
      </Text>

      <Text
      style={
      styles.club
      }
      >
      ⚽ {item.club}
      </Text>

      </View>

      </TouchableOpacity>

      ))}

      <View
      style={
      styles.formContainer
      }
      >

      <Text
      style={
      styles.formTitle
      }
      >
      Booking Form
      </Text>

      <TextInput
      placeholder=
      "Enter your name"
      style={
      styles.input
      }
      value={name}
      onChangeText=
      {setName}
      />

      <TextInput
      placeholder=
      "Enter your email"
      style={
      styles.input
      }
      value={email}
      onChangeText=
      {setEmail}
      keyboardType=
      "email-address"
      />

      <TextInput
      placeholder=
      "Total ticket"
      style={
      styles.input
      }
      value={ticket}
      onChangeText=
      {setTicket}
      keyboardType=
      "numeric"
      />

      </View>

      <TouchableOpacity
      style={
      styles.button
      }
      onPress={
      handleBooking
      }
      >

      <Text
      style={
      styles.buttonText
      }
      >
      BOOK NOW
      </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}

const styles =
StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:"#fff"
},

title:{
fontSize:28,
fontWeight:"bold",
marginBottom:5
},

subtitle:{
fontSize:16,
marginBottom:15
},

card:{
backgroundColor:"#f2f2f2",
borderRadius:12,
marginBottom:15,
overflow:"hidden",
borderWidth:2,
borderColor:"transparent"
},

selected:{
borderColor:"#007BFF"
},

image:{
width:"100%",
height:180
},

info:{
padding:10
},

stadium:{
fontSize:16,
fontWeight:"bold"
},

club:{
fontSize:14,
color:"#555"
},

formContainer:{
marginTop:10,
marginBottom:20
},

formTitle:{
fontSize:20,
fontWeight:"bold",
marginBottom:15
},

input:{
borderWidth:1,
borderColor:"#ccc",
borderRadius:10,
padding:12,
marginBottom:12
},

button:{
backgroundColor:"#0b3d63",
padding:15,
borderRadius:8,
alignItems:"center",
marginBottom:30
},

buttonText:{
color:"#fff",
fontSize:16,
fontWeight:"bold"
}

});