import { live } from "@/utils";
import { Video } from "expo-av";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
} from "react-native";

const CarouselWithIndicators = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const slideWidth = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.floor(contentOffset / slideWidth);
    setActiveIndex(currentIndex);
  };

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {live.map((item, index) => (
          <Pressable
            onPress={() => router.push(`liveSection/${item.name}`)}
            style={styles.image}
            key={index}
          >
            <View style={styles.videoContainer}>
              <Video
                source={{
                  uri: item.videoUrl,
                }}
                shouldPlay
                style={styles.video}
              />
              <View style={styles.overlayContainer}>
                <View className="">
                  <Text style={styles.indicatorText}>{item.name}</Text>
                  <Text style={styles.indicatorDescription}>{item.description}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    width,
    height: 200, // Adjust height as per your requirement
    resizeMode: "cover",
    backgroundColor: "#fff",
  },
  indicatorsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: "gray",
    marginHorizontal: 5,
    position: "absolute",
    flexDirection: "row",
    gap: 9,
  },
  activeIndicator: {
    backgroundColor: "#000",
    width: 20,
    height: 6,
  },
  indicatorText: {
    textAlign: "left",
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  videoContainer: {
    position: "relative",
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: 200,
    backgroundColor: "#000",
  },
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 18,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorDescription: {
    textAlign: "left",
    marginTop: 5,
    fontSize: 12,
    fontWeight: "normal",
    color: "#fff",
  }
});

export default CarouselWithIndicators;
