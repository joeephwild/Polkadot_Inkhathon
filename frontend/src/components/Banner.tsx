import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { banner } from "@/utils";

const Banner = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          height: 200,
          gap: 9,
          marginTop: 16,
        }}
      >
        {banner.map((item, index) => (
          <View key={index} className="border-2 border-white pl-9 w-[300px] h-[200px] ml-6">
            <Image
              source={{
                uri: item.Image,
              }}
              className="w-[300px] h-[300px] self-end items-end"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Banner;
