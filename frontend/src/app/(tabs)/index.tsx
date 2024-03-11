import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Sponsored from "@/components/home/Sponsored";
import { SafeAreaView } from "react-native-safe-area-context";
import CarouselWithIndicators from "@/components/home/Carousel";
import Header from "@/components/Header";
import Recent from "@/components/home/Recent";
import {
  ArrowDownTrayIcon,
  GlobeAmericasIcon,
} from "react-native-heroicons/solid";
import GameCard from "@/components/GameCard";
import { storeColors } from "@/theme";
import Range from "@/components/range";

const featured = [
  {
    id: 1,
    title: "Zooba",
    image: require("../../assets/images/zooba.png"),
    downloads: "200k",
    stars: 4,
  },
  {
    id: 2,
    title: "Subway Surfer",
    image: require("../../assets/images/subway.png"),
    downloads: "5M",
    stars: 4,
  },
  {
    id: 3,
    title: "Free Fire",
    image: require("../../assets/images/freeFire.png"),
    downloads: "100M",
    stars: 3,
  },

  {
    id: 4,
    title: "Alto's Adventure",
    image: require("../../assets/images/altosAdventure.png"),
    downloads: "20k",
    stars: 4,
  },
];

const games = [
  {
    id: 1,
    title: "Shadow Fight",
    image: require("../../assets/images/shadowFight.png"),
    downloads: "20M",
    stars: 4.5,
  },
  {
    id: 2,
    title: "Valor Arena",
    image: require("../../assets/images/valorArena.png"),
    downloads: "10k",
    stars: 3.4,
  },
  {
    id: 3,
    title: "Frag",
    image: require("../../assets/images/frag.png"),
    downloads: "80k",
    stars: 4.6,
  },
  {
    id: 4,
    title: "Zooba Wildlife",
    image: require("../../assets/images/zoobaGame.png"),
    downloads: "40k",
    stars: 3.5,
  },
  {
    id: 4,
    title: "Clash of Clans",
    image: require("../../assets/images/clashofclans.png"),
    downloads: "20k",
    stars: 4.2,
  },
];

const Home = () => {
  const [selectedGame, setSelectedGame] = useState(null);

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
          marginBottom: 8,
        }}
      >
        <Range />
        {/* featured row  */}
        <View className="mt-3 space-y-4">
          <Text
            style={{ color: storeColors.text }}
            className="ml-4 text-lg font-bold"
          >
            Featured Games
          </Text>
          <View className="pl-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {featured.map((item, index) => {
                return <GameCard key={index} game={item} />;
              })}
            </ScrollView>
          </View>
        </View>

        <View className="mt-3">
          <View className="flex-row justify-between items-center mb-2">
            <Text style={{ color: "#fff" }} className="ml-4 text-lg font-bold">
              Top Action Games
            </Text>
          </View>

          {games.slice(0, 3).map((game, index) => {
            let bg =
              game.id == selectedGame ? "rgba(255,255,255,0.4)" : "transparent";

            return (
              <TouchableOpacity
                style={{ backgroundColor: bg }}
                className="mx-4 p-2 mb-2 flex-row rounded-3xl"
                onPress={() => setSelectedGame(game.id)}
                key={index}
              >
                <Image
                  source={game.image}
                  style={{ width: 80, height: 80 }}
                  className="rounded-2xl"
                />
                <View className="flex-1 flex justify-center pl-3 space-y-3">
                  <Text
                    style={{ color: storeColors.text }}
                    className="font-semibold"
                  >
                    {game.title}
                  </Text>
                  <View className="flex-row space-x-3">
                    <View className="flex-row space-x-1">
                      <Image
                        className="h-4 w-4 opacity-80"
                        source={require("../../assets/images/fullStar.png")}
                      />
                      <Text className="text-xs text-[#fff]">
                        {game.stars} stars
                      </Text>
                    </View>
                    <View className="flex-row space-x-1">
                      <ArrowDownTrayIcon size="15" className="text-blue-500" />
                      <Text className="text-xs text-[#fff]">
                        {game.downloads}
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="flex justify-center items-center">
                  <TouchableOpacity className={`p-3 px-4 }`}>
                    <Text className="text-white font-bold">enter</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <Sponsored />
        <Recent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
