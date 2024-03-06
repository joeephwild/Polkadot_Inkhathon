import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";
import { useAccount, useDisconnect } from "wagmi";

const Header = ({ title }) => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  console.log(address);
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const getDATE = () => {
      // Create a new Date object
      var today = new Date();

      // Array of month names
      var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // Get the month name
      var monthName = monthNames[today.getMonth()];

      // Get the day of the month
      var day = today.getDate();

      // Concatenate the month name and day with the desired format
      var formattedDate = monthName + " " + day;

      // Display the formatted date
      console.log("Today's date is: " + formattedDate);
      setCurrentDate(formattedDate);
    };
    getDATE();
  }, []);

  const andleAut = async () => {
    if (!address) {
      open();
    } else {
      router.push("/profile");
    }
  };
  return (
    <View className="h-[60px] px-5 flex-row items-center justify-between">
      <Text className="text-4xl text-[#fff] font-bold">
        {title}
        {/* <Text className="text-xl text-[#888CAD]"> {currentDate}</Text> */}
      </Text>
      <Pressable onPress={andleAut}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=826&t=st=1707428110~exp=1707428710~hmac=c0e51f1629f9e7faf5ee96a8154b50cc8b1676f73b59b50e1c0f32a04538f6d3",
          }}
          className="w-[50px] h-[50px] rounded-full"
        />
      </Pressable>
    </View>
  );
};

export default Header;
