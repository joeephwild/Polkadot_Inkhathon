import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import ProposalCard from "@/components/card/ProposalCard";
import CommunityCard from "@/components/card/CommunityCard";

const proposals = [
  {
    imageSource:
      "https://images.pexels.com/photos/20010405/pexels-photo-20010405/free-photo-of-a-woman-in-black-and-white-dress-and-boots-standing-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Sample Proposal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida ligula ut libero malesuada, nec ultrices nisi semper.",
    yesCount: 150,
    noCount: 50,
  },
  {
    imageSource:
      "https://images.pexels.com/photos/20010405/pexels-photo-20010405/free-photo-of-a-woman-in-black-and-white-dress-and-boots-standing-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Sample Proposal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida ligula ut libero malesuada, nec ultrices nisi semper.",
    yesCount: 150,
    noCount: 50,
  },
  {
    imageSource:
      "https://images.pexels.com/photos/20010405/pexels-photo-20010405/free-photo-of-a-woman-in-black-and-white-dress-and-boots-standing-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Sample Proposal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida ligula ut libero malesuada, nec ultrices nisi semper.",
    yesCount: 150,
    noCount: 50,
  },
  {
    imageSource:
      "https://images.pexels.com/photos/20010405/pexels-photo-20010405/free-photo-of-a-woman-in-black-and-white-dress-and-boots-standing-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Sample Proposal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida ligula ut libero malesuada, nec ultrices nisi semper.",
    yesCount: 150,
    noCount: 50,
  },
];

const dao = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Community" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          minHeight: "100%",
        }}
        contentContainerStyle={{
          marginBottom: 119,
        }}
      >
        {proposals.map((item, index) => (
          <CommunityCard key={index} {...item} />
        ))}
      </ScrollView>
      <TouchableOpacity>
    
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default dao;
