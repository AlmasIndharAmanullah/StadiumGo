import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from "react-native";
import { stadiums } from "../data/stadiums";

export default function Discover() {

  const [search, setSearch] = useState("");

  const filtered = stadiums.filter((item) => {
    const keyword = search.toLowerCase();
    return (
      item.title.toLowerCase().includes(keyword) ||
      item.club.toLowerCase().includes(keyword)
    );
  });

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Discover Stadium</Text>

      <TextInput
        placeholder="Search stadium or club..."
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      <Text style={styles.subtitle}>London Stadium Tours</Text>

      <ScrollView>
        {filtered.map((item, index) => (
          <View key={index} style={styles.card}>

            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.club}> {item.club}</Text>
            </View>

          </View>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15
  },

  search: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10
  },

  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden"
  },

  image: {
    width: "100%",
    height: 180
  },

  info: {
    padding: 10
  },

  name: {
    fontSize: 16,
    fontWeight: "bold"
  },

  club: {
    fontSize: 14,
    color: "#555"
  }
});

