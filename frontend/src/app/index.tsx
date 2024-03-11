import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";

const onBoradingSteps = [
  {
    title: "Welcome to the Dean of Decntralized Applications!",
    image:
      "https://images.pexels.com/photos/6498301/pexels-photo-6498301.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Dive into a world of innovative and engaging blockchain-based games. Own your assets, experience true ownership, and connect with a passionate community.",
  },
  {
    title: "Explore the possibilities!",
    image:
      "https://images.pexels.com/photos/4144458/pexels-photo-4144458.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Browse our diverse collection of dApps based on Usability, popularity, and blockchain technology. Find your next adventure!",
  },
  {
    title: "Secure your adventure!",
    image:
      "https://images.pexels.com/photos/3943740/pexels-photo-3943740.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Choose your preferred crypto wallet or connect an existing one. Your wallet is your key to downloading, playing, and trading games on our platform.",
  },
  {
    title: "Join the fun!",
    image:
      "https://images.pexels.com/photos/2552127/pexels-photo-2552127.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Connect with other players, discuss games, share strategies, and participate in exciting live events (Community events, feature announcements and dApp review session.",
  },
];

const index = () => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = onBoradingSteps[currentIndex];

  const handleNext = () => {
    if (currentIndex === onBoradingSteps.length - 1) {
      handleSkip();
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex === 0) {
      handleSkip();
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSkip = () => {
    setCurrentIndex(3); // Directly go to the last step
  };

  const swipeForward = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd((event) => {
      handleNext();
    });

  const swipeBackward = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd((event) => {
      handleBack();
    });

  const swipes = Gesture.Race(swipeForward, swipeBackward);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={swipes}>
        <View className="items-center justify-center flex-1">
          <StatusBar style="auto" />
          <ImageBackground
            source={{
              uri: data?.image,
            }}
            className="min-h-[70%] w-full items-end relative"
          >
            <TouchableOpacity
              onPress={handleSkip}
              className="rounded-[40px] py-[12px] px-[20px] mt-[80px] items-center justify-center"
            >
              <Text className="text-[16px]  font-opensans-bold text-[#fff]">
                Skip
              </Text>
            </TouchableOpacity>
            <View className="flex-row items-center mb-9 space-x-2 absolute bottom-0 left-1/2 transform -translate-x-1/2">
              {onBoradingSteps.map((_, index) => (
                <View
                  key={index}
                  className={`h-2 rounded w-[20px] ${
                    currentIndex === index
                      ? "bg-blue-400"
                      : "bg-white w-2 rounded-full"
                  }`}
                />
              ))}
            </View>
          </ImageBackground>
          <View className="bg-whit items-center w-full py-[16px] h-[30%]">
            <Text className="text-[24px] font-opensans-bold px-[20px] text-[#fff] text-center font-bold">
              {data.title}
            </Text>
            <Text className="text-[14px] font-opensans-regular p-[20px] text-[#fff] text-center">
              {data.description}
            </Text>
            {currentIndex != 3 && (
              <TouchableOpacity
                onPress={handleNext}
                className="bg-[#ffe500] rounded-[40px] py-[16px] mt-[10px] items-center justify-center w-[80%]"
              >
                <Text className="text-[16px]  font-opensans-bold text-[#000]">
                  Get Started
                </Text>
              </TouchableOpacity>
            )}
            {currentIndex === 3 && (
              <View className="flex-row items-center px-9 space-x-[120px]">
                {address ? (
                  <View className="w-full">
                    <TouchableOpacity
                      onPress={() => router.push("/(tabs)")}
                      className="bg-[#ffe500] rounded-[40px] py-[16px] px-[40px] mt-[20px] items-center justify-center"
                    >
                      <Text className="text-[16px]  font-opensans-bold text-[#000]">
                        Explore
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="items-center justify-center mt-5">
                      <Text className="text-[12px] font-opensans-regular text-[#000]">
                        Disconnect Wallet
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View className="w-full">
                    <TouchableOpacity
                      onPress={() => open()}
                      className="bg-[#ffe500] rounded-[40px] py-[16px] px-[40px] mt-[20px] items-center justify-center"
                    >
                      <Text className="text-[16px]  font-opensans-bold text-[#000]">
                        Connect Wallet
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default index;
