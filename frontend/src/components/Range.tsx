import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";

const categories = [
  "Action",
  "Family",
  "Puzzle",
  "Adventure",
  "Racing",
  "Education",
  "Others",
];

const Range = () => {
  const [activeCategory, setActiveCategory] = useState("Action");
  return (
    <View className="mt-3 space-y-4">
      <View className="pl-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((cat) => {
            if (cat == activeCategory) {
              // show gradient category
              return (
                <TouchableOpacity className={`p-3 px-4 bg-blue-400}`}>
                  <Text className="text-white font-bold">{cat}</Text>
                </TouchableOpacity>
              );
            } else {
              // show normal category
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(cat)}
                  key={cat}
                  className="bg-[#ffe500] p-3 px-4 rounded-full mr-2"
                >
                  <Text>{cat}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Range;
