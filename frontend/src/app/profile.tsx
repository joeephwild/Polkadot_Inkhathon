import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAccount, useDisconnect } from "wagmi";

const search = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const section = [
    {
      title: "Live",
      iconName: "videocam", // Assuming you have a live icon named "live"
      onPress: () => {},
    },
    {
      title: "Notification",
      iconName: "notifications", // Assuming you have a notifications icon named "notifications"
      onPress: () => {},
    },
    {
      title: "Community Settings",
      iconName: "settings", // Assuming you have a settings icon named "settings"
      onPress: () => {},
    },
    {
      title: "Game",
      iconName: "game-controller", // Assuming you have a game controller icon named "game-controller"
      onPress: () => {},
    },
    {
      title: "Disconnect",
      iconName: "log-out", // Assuming you have a logout icon named "logout"
      onPress: async() => {
        disconnect();
      },
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        minHeight: "100%",
      }}
    >
      <View className="items-center justify-center mt-[50px]">
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
        <Text className="text-white font-bold text-xl">Joseph Omotade</Text>
        <Text className="text-[16px] font-semibold text-[#fff]">
          {address?.slice(0, 7)}...{address?.slice(30, 46)}
        </Text>
      </View>
      <TouchableOpacity className="bg-[#ffe500] rounded-[40px] py-[16px] px-[30px] mt-[20px] items-center justify-center">
        <Text className="text-[16px]  font-opensans-bold text-[#000]">
          Edit profile
        </Text>
      </TouchableOpacity>

      <View className="m-9">
        {section.map((item, index) => (
          <Pressable
          onPress={item.onPress}
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <Ionicons name={item.iconName} size={24} color="white" />
            <Text
              style={{ marginLeft: 10, color: "#fff" }}
              className="text-[16px]"
            >
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default search;
