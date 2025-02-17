import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-gray-900 justify-center items-center pr-24 pl-20 py-48">
      {/* Row Container */}
      <View className="flex-row space-x-4 w-full h-screen gap-5">
        {/* Control Block (Placeholder) */}
        <TouchableOpacity
          className="bg-blue-600 p-6 rounded-lg shadow-lg active:bg-blue-700 flex-col w-1/3 justify-center"
          onPress={() => {
            navigation.navigate("control");
          }}
        >
          <Text className="text-white text-xl font-bold text-center">
            Control
          </Text>
        </TouchableOpacity>

        {/* Video Collection Block */}
        <TouchableOpacity
          className="bg-green-600 p-6 rounded-lg shadow-lg active:bg-green-700 flex-col w-1/3 justify-center"
          onPress={() => {
            navigation.navigate("videoCollection");
          }}
        >
          <Text className="text-white text-xl font-bold text-center">
            Video Collection
          </Text>
        </TouchableOpacity>

        {/* Path Collection Block */}
        <TouchableOpacity
          className="bg-orange-600 p-6 rounded-lg shadow-lg active:bg-orange-700 flex-col w-1/3 justify-center"
          onPress={() => navigation.navigate("pathCollection")}
        >
          <Text className="text-white text-xl font-bold text-center">
            Path Collection
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
