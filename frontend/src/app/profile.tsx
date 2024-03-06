import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const search = () => {
  return (
    <View
      style={{
        flex: 1,
        minHeight: "100%",
      }}
    >
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
        className="h-[200px]"
      >
        <View className="flex-row items-center mt-[40px] px-[18px] justify-between">
          <Ionicons
            onPress={() => router.back()}
            name="arrow-back-circle"
            size={50}
            color="#fff"
          />
          <Ionicons name="settings" size={25} color="#fff" />
        </View>
        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: 110,
            right: "1%",
            marginLeft: -45, // Half of the image width to center it horizontally
            marginTop: 38,
          }}
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/9222625/pexels-photo-9222625.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={{
              width: 90,
              height: 90,
              borderRadius: 45,
              borderWidth: 2,
              borderColor: "white",
            }}
          />
        </View>
        
      </ImageBackground>
      <Text>ello worl</Text>
    </View>
  );
};

export default search;
