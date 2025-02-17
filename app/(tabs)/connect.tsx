import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Connect() {
  const navigation = useNavigation();

  const handleConnect = () => {
    navigation.navigate("home");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 justify-center items-center bg-gray-900 px-6"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="w-full items-center">
          <View className="w-full p-5 bg-gray-800 rounded-lg shadow-lg mb-8 border border-gray-700">
            <Text className="text-white text-lg font-semibold mb-2">
              How To Connect:
            </Text>
            <Text className="text-gray-300 text-base">
              Enter the unique 6-digit connection code assigned to your robot.
              Ensure the robot is powered on and within range. Once entered, tap
              "Connect" to establish a secure link.
            </Text>
          </View>

          <View className="flex-row items-center gap-7 bg-gray-800 p-4 rounded-lg shadow-md">
            <TextInput
              className="w-48 p-3 bg-white rounded-md text-lg text-black text-center"
              placeholder="Enter 6-digit Code"
              placeholderTextColor="#666"
              keyboardType="numeric"
              maxLength={6}
              returnKeyType="done"
            />
            <TouchableOpacity
              className="bg-orange-600 px-5 py-3 rounded-md shadow-md active:bg-orange-700"
              onPress={handleConnect}
            >
              <Text className="text-white font-bold text-lg">Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
