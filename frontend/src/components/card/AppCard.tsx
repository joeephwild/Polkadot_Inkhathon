import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { router } from "expo-router";

type Props = {
  image: string;
  title: string;
  type: string;
  rating: number;
  size: number;
  screenshot: string[];
  creators: string;
  isFree: boolean;
};

const AppCard = ({ image, rating, size, title, type }: Props) => {
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

export default AppCard;
