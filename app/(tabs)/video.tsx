import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Video() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("videoCollection");
  };

  return (
    <View className="flex-1 bg-gray-900">
      {/* Navbar */}
      <View className="flex-row gap-4 justify-between items-center px-10 py-4 bg-gray-800">
        <TouchableOpacity onPress={handleGoBack}>
          <Text className="text-white font-bold">Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white font-bold">Settings</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 bg-gray-700 justify-center items-center h-5">
        <Text className="text-white text-lg">Video Placeholder</Text>
      </View>

      {/* Controls */}
      <View className="p-4 flex-row justify-between">
        <TouchableOpacity className="bg-orange-600 px-6 py-3 rounded-lg items-center">
          <Text className="text-white text-lg">Play / Pause</Text>
        </TouchableOpacity>
        {/* Seek Bar (Placeholder) */}
        <View className="w-full h-2 bg-gray-500 rounded-full mb-4" />

        {/* Play/Pause Button (No real function) */}
      </View>
    </View>
  );
}
