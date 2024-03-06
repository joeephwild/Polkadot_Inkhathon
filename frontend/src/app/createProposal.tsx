import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const CreateProposal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handleSubmit = () => {
    // Implement your submit logic here
    console.log("Title:", title);
    console.log("Description:", description);
    // Reset the form
    setTitle("");
    setDescription("");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <Ionicons
          onPress={() => router.back()}
          name="arrow-back-circle"
          size={50}
          color="#fff"
        />
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          New Proposal
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: 24,
          marginTop: 9,
          flex: 1,
        }}
      >
        <View style={{ width: "100%", marginTop: 20 }}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Proposal Title</Text>
          <TextInput
            placeholder="Title"
            style={{
              backgroundColor: "#262837",
              height: 50,
              width: "100%",
              borderRadius: 25.5,
              paddingHorizontal: 16,
              marginTop: 8,
              color: "#fff",
            }}
            value={title}
            onChangeText={handleTitleChange}
          />
        </View>

        <View style={{ width: "100%", marginTop: 20 }}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Description</Text>
          <TextInput
            placeholder="Description"
            multiline={true}
            numberOfLines={4}
            style={{
              backgroundColor: "#262837",
              height: 120,
              width: "100%",
              borderRadius: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              color: "#fff",
            }}
            value={description}
            onChangeText={handleDescriptionChange}
          />
        </View>

        <View style={{ width: "100%", marginTop: 20 }}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Proposal Title</Text>
          <TextInput
            placeholder="Title"
            style={{
              backgroundColor: "#262837",
              height: 50,
              width: "100%",
              borderRadius: 25.5,
              paddingHorizontal: 16,
              marginTop: 8,
              color: "#fff",
            }}
            value={title}
            onChangeText={handleTitleChange}
          />
        </View>

        <View style={{ width: "100%", marginTop: 20 }}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Proposal Title</Text>
          <TextInput
            placeholder="Title"
            keyboardType="number-pad"
            style={{
              backgroundColor: "#262837",
              height: 50,
              width: "100%",
              borderRadius: 25.5,
              paddingHorizontal: 16,
              marginTop: 8,
              color: "#fff",
            }}
            value={title}
            onChangeText={handleTitleChange}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#007FFF",
            paddingHorizontal: 30,
            paddingVertical: 20,
            borderRadius: 5,
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
          }}
          onPress={handleSubmit}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateProposal;
