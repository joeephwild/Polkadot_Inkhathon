import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet";
import { router, useLocalSearchParams } from "expo-router";
import { Portal } from "@gorhom/portal";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { live } from "@/utils";
import { ResizeMode, Video } from "expo-av";

const Live = () => {
  const sheetRef = useRef<BottomSheetMethods>(null);
  const { name } = useLocalSearchParams();
  const [appDetals, setAppDetails] = useState<{
    videoUrl: string;
    name: string;
    description: string;
    hostAddress: string;
    hostName: string;
    attendees: {
      id: string;
      name: string;
      email: string;
    }[];
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      const result = live.filter((app) => app.name === name);
      console.log(result);
      setAppDetails(result[0]);
      setLoading(false); // Set loading to false after fetching data
    };
    getDetails();
  }, [name]); // Depend on 'name' instead of 'appDetals' to avoid infinite loop
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Video
        source={{
          uri: appDetals?.videoUrl,
        }}
        style={{
          height: 300,
        }}
        resizeMode={ResizeMode.COVER}
        shouldPlay
      >
        <SafeAreaView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            position: "absolute"
          }}
        >
          <Pressable
            onPress={() => router.back()}
            className="bg-white w-[50px] h-[50px] rounded-full items-center justify-center"
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </Pressable>
          <View className="flex-row items-center gap-2">
            <Pressable
              onPress={() => router.back()}
              className="bg-white w-[50px] h-[50px] rounded-full items-center justify-center"
            >
              <Ionicons name="arrow-back" size={24} color="#000" />
            </Pressable>
            <Pressable
              onPress={() => router.back()}
              className="bg-white w-[50px] h-[50px] rounded-full items-center justify-center"
            >
              <Ionicons name="arrow-back" size={24} color="#000" />
            </Pressable>
          </View>
        </SafeAreaView>
      </Video>
      <TouchableOpacity
        onPress={() => sheetRef.current?.open()}
        className="bg-white h-[50px] w-[50px] rounded-full items-center justify-center absolute bottom-9 right-6"
      >
        <Ionicons name="chatbox" size={24} color="#000" />
      </TouchableOpacity>
      <Portal>
        <BottomSheet
          ref={sheetRef}
          style={{
            backgroundColor: "#1E1D1A",
          }}
        >
          <Text>
            The smart 😎, tiny 📦, and flexible 🎗 bottom sheet your app craves
            🚀
          </Text>
        </BottomSheet>
      </Portal>
    </View>
  );
};

export default Live;
