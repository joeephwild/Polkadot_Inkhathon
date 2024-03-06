import { View, Text, Image, FlatList, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { apps } from "@/utils";
import { router } from "expo-router";
import AppCard from "../card/AppCard";

type Props = {
  image: any;
  title: string;
  type: string;
  rating: number;
  size: number;
};

const Sponsored = () => {
  const renderItem = ({ item }) => (
    <View>
      <AppCard {...item} />
    </View>
  );

  return (
    <View className="">
      <View className="flex-row items-center space-x-[8px]">
        <Ionicons name="star" color="#ffe500" size={16} />
        <Text className="text-lg font-bold text-[#fff]">Sponsored</Text>
      </View>

      <View className="flex-row flex-wrap w-[100%]">
        <FlatList
          data={apps}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 19,
            paddingHorizontal: 10, // Add horizontal padding for spacing between cards
            gap: 16,
          }}
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        />
      </View>
    </View>
  );
};

const GameCard = ({ image, rating, size, title, type }: Props) => {
  return (
    <Pressable
      onPress={() => router.push(`/appDetail/${title}`)}
      className="flex-row space-x-[16px]"
    >
      <Image
        source={{
          uri: image,
        }}
        className="w-[78px] h-[78px] object-cover rounded-lg"
      />
      <View className="ml-[16px]">
        <Text className="text-[#fff] text-xl">{title}</Text>
        <Text className="text-[#fff] text-lg">{type}</Text>
        <View className="flex-row items-center">
          <Text className="text-[#fff] text-sm pr-6">{rating}</Text>
          <Text className="text-[#fff] text-sm">{size} MB</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Sponsored;
