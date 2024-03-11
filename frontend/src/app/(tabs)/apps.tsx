import { ScrollView, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import Recent from "@/components/home/Recent";
import Sponsored from "@/components/home/Sponsored";
import Banner from "@/components/Banner";
import Range from "@/components/range";

const apps = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Apps" />
      <ScrollView
        style={{
          flex: 1,
          minHeight: "100%",
        }}
      >
        <Range />
        <Banner />
        <Sponsored />
        <Banner />
        <Recent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default apps;
