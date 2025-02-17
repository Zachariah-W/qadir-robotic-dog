import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ControlPage() {
  const navigation = useNavigation();

  const [isRecording, setIsRecording] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [isStandUp, setIsStandUp] = useState(false);
  const [isPathCollecting, setIsPathCollecting] = useState(false);

  const handleGoBack = () => {
    navigation.navigate("home");
  };

  const handleSettings = () => {};

  const handleStandupSitdown = () => {
    setIsStandUp((prevState) => !prevState);
  };

  const handleStartStopRecording = () => {
    setIsRecording((prevState) => !prevState);
  };

  const handleStartStopCollectionPath = () => {
    setIsPathCollecting((prevState) => !prevState);
  };

  const handleSpeedChange = () => {
    setSpeed((prevSpeed) => (prevSpeed === 4 ? 1 : prevSpeed + 1));
  };

  return (
    <View className="flex-col gap-3 bg-gray-900 items-center ">
      <View className="flex-row justify-between items-center p-4 bg-gray-800 px-16 w-full">
        <TouchableOpacity onPress={handleGoBack}>
          <Text className="text-white font-bold">Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettings}>
          <Text className="text-white font-bold">Settings</Text>
        </TouchableOpacity>
      </View>

      <View className="w-screen h-56 bg-neutral-700 rounded-sm mx-10"></View>

      <View className="bg-gray-800 p-4 rounded-tl-xl rounded-tr-xl w-full">
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-4">
            <TouchableOpacity>
              <Text className="text-white text-xl">←</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-white text-xl">→</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center gap-4">
            <TouchableOpacity
              className="bg-orange-600 py-2 px-4 rounded-md"
              onPress={handleSpeedChange}
            >
              <Text className="text-white font-bold">Speed {speed}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="bg-orange-600 py-2 px-4 rounded-md"
            onPress={handleStandupSitdown}
          >
            <Text className="text-white font-bold">
              {isStandUp ? "Sit Down" : "Stand Up"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-orange-600 py-2 px-4 rounded-md"
            onPress={handleStartStopRecording}
          >
            <Text className="text-white font-bold">
              {isRecording ? "Stop Recording" : "Start Recording"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-orange-600 py-2 px-4 rounded-md"
            onPress={handleStartStopCollectionPath}
          >
            <Text className="text-white font-bold">
              {isPathCollecting
                ? "Stop Path Collection"
                : "Start Path Collection"}
            </Text>
          </TouchableOpacity>
          <View className="flex-row gap-4">
            <TouchableOpacity>
              <Text className="text-white text-xl">↑</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-white text-xl">↓</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
