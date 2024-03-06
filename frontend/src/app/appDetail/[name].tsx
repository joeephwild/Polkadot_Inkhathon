import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { apps } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MdOutlineFileDownload } from "react-icons/md";

const Details = () => {
  const { name } = useLocalSearchParams();
  const [appDetals, setAppDetails] = useState<{
    image: string;
    title: string;
    type: string;
    rating: number;
    size: number;
    screenshot: string[];
    creators: string;
    isFree: boolean;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      const result = apps.filter((app) => app.title === name);
      console.log(result);
      setAppDetails(result[0]);
      setLoading(false); // Set loading to false after fetching data
    };
    getDetails();
  }, [name]); // Depend on 'name' instead of 'appDetals' to avoid infinite loop

  return (
    <View style={{ flex: 1, minHeight: "100%" }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={{
              uri: appDetals.image,
            }}
            style={{ height: 200, width: "100%" }}
          >
            <SafeAreaView
              style={{
                padding: 8,
              }}
            >
              <Pressable
                onPress={() => router.back()}
                className="bg-white w-[50px] h-[50px] rounded-full items-center justify-center"
              >
                <Ionicons name="arrow-back" size={24} color="#000" />
              </Pressable>
            </SafeAreaView>
          </ImageBackground>

          <View style={{ marginTop: 40, paddingHorizontal: 9 }}>
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                height: 92,
              }}
            >
              <Image
                source={{
                  uri: appDetals.image,
                }}
                style={{ width: 92, height: 92, borderRadius: 5 }}
              />
              <View
                style={{
                  gap: 8,
                }}
              >
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 20,
                    color: "#fff",
                    fontWeight: "700",
                    width: 216,
                  }}
                >
                  {appDetals.title}
                </Text>
                <Text
                  style={{
                    color: "#ffe500",
                    fontWeight: "700",
                  }}
                >
                  {appDetals.creators}
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: "400",
                  }}
                >
                  Contains ads <Ionicons name="pin-outline" color="#fffs" />{" "}
                  In-app purchases with BNB
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingHorizontal: 9,
              gap: 16,
              borderTopWidth: 1,
              borderTopColor: "rgba(255, 255, 255, 0.08)",
              borderBottomWidth: 1,
              borderBottomColor: "rgba(255, 255, 255, 0.08)",
              alignContent: "center",
              marginTop: 16,
              paddingVertical: 8,
            }}
          >
            <View
              style={{
                alignContent: "center",
                alignItems: "center",
                borderRightColor: "#fff",
                borderRightWidth: 2,
                paddingRight: 14,
              }}
            >
              <Text className="text-[#fff]  font-semibold  px-2 py-1 rounded">
                4.4
              </Text>
              <Text className="rounded text-[#C4C4C4] text-[12px] font-medium">
                36K Reviews
              </Text>
            </View>
            <View
              style={{
                alignContent: "center",
                alignItems: "center",
                borderRightColor: "#fff",
                borderRightWidth: 2,
                paddingRight: 19,
              }}
            >
              <Ionicons name="cloud-download" size={24} color="#fff" />
              <Text className="rounded text-[#C4C4C4] text-center text-[12px] font-medium">
                {appDetals.size}MB
              </Text>
            </View>
            <View
              style={{
                alignContent: "center",
                alignItems: "center",
                borderRightColor: "#fff",
                borderRightWidth: 2,
                paddingRight: 14,
              }}
            >
              <Text className="text-[#fff] text-center font-semibold px-2 py-1 rounded">
                16+
              </Text>
              <Text className="rounded text-[#C4C4C4] text-[12px] font-medium">
                Rated for 16+
              </Text>
            </View>
            <View>
              <Text className="text-[#fff] font-semibold  px-2 py-1 rounded">
                100k +
              </Text>
              <Text className="rounded text-[#C4C4C4] text-[12px] font-medium">
                Downloads
              </Text>
            </View>
          </View>

          {/** download */}
          <View className="mt-[24px] gap-11 flex-row items-center mx-4">
            <TouchableOpacity className="bg-[#007FFF] w-[80%] items-center justify-center py-[16px] rounded-[29px]">
              <Text className="text-[#fff] font-semibold text-[16px]">
                Install
              </Text>
            </TouchableOpacity>
            <Ionicons name="share" size={24} color="#fff" />
          </View>

          {/** screenshot */}
          <View className="gap-9 flex-row items-center">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 9,
                marginTop: 18,
              }}
            >
              {appDetals.screenshot.map((image, index) => (
                <Image
                  key={index}
                  source={{
                    uri: image,
                  }}
                  className="w-[200px] h-[400px] object-cover rounded-lg"
                />
              ))}
            </ScrollView>
          </View>

          {/** game details */}
          <View className="mt-[24px]">
            <View className="flex-row items-center justify-between px-4">
              <Text className="text-[16px] font-semibold text-[#fff]">
                About
              </Text>
              <Ionicons name="arrow-forward" size={24} color="#fff" />
            </View>

            <Text className="mt-[30px] text-[12px] text-[#cacaca] font-medium px-4">
              Play this fun first-person shooter (FPS) and explore popular
              Multiplayer modes such as Team Deathmatch, Domination, and
              Kill-Confirmed on iconic maps such as Shipment, Raid, and
              Standoff, all in CALL OF DUTY®: MOBILE!
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Details;
