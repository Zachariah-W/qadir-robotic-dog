import { View, Text } from "react-native";

export default function Landing() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <View className="w-40 h-40 bg-orange-500 rounded-lg shadow-lg" />
      <Text className="mt-4 text-xl font-bold text-white">Robot Dog</Text>
    </View>
  );
}
