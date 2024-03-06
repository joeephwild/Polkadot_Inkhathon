import { View, Text, ScrollView } from "react-native";
import React from "react";
import Sponsored from "@/components/home/Sponsored";
import { SafeAreaView } from "react-native-safe-area-context";
import CarouselWithIndicators from "@/components/home/Carousel";
import Header from "@/components/Header";
import Recent from "@/components/home/Recent";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Header title="Today" />

      <ScrollView
        style={{
          flex: 1,
          minHeight: "100%",
          marginBottom: 8
        }}
      >
        <CarouselWithIndicators />
        <Sponsored />
        <Recent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
