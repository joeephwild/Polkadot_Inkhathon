import { View, Text, FlatList, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { apps } from "@/utils";
import { router } from "expo-router";

const AppCard = ({ item }) => {
  return (
    <Pressable onPress={() => router.push(`/appDetail/${item.title}`)} style={{ alignItems: "center", maxWidth: 125 }}>
      <Image
        source={{
          uri: item.image
        }}
        style={{
          width: 110,
          height: 110,
          resizeMode: "cover",
          borderRadius: 8,
        }}
      />
      <View
        style={{
          marginTop: 5,
        }}
      >
        <Text
          numberOfLines={2}
          ellipsizeMode="clip"
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: "bold",
            maxWidth: 100,
          }}
        >
          {item.title}
        </Text>
        <Text style={{ color: "#fff", fontSize: 12, marginTop: 2 }}>
          {item.type}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: 6,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 14, paddingRight: 6 }}>
            {item.rating}
          </Text>
          <Text style={{ color: "#fff", fontSize: 14 }}>{item.size} MB</Text>
        </View>
      </View>
    </Pressable>
  );
};

const Recent = () => {
  return (
    <View style={{ marginTop: 19 }}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 3,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
          Based on your recent activities
        </Text>
        <Ionicons name="arrow-forward" size={24} color="#fff" />
      </View>
      <FlatList
        data={apps.slice(0, 6)}
        renderItem={({ item }) => <AppCard item={item} />}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 9,
          justifyContent: "center",
          paddingHorizontal: 1,
          gap: 9,
        }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

export default Recent;
