import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Policies() {
  const navigation = useNavigation();

  const handleAccept = () => {
    navigation.navigate("connect");
  };

  return (
    <View className="flex-1 bg-gray-900 px-6 py-10">
      <View className="mb-4">
        <Text className="text-white text-xl font-semibold">Privacy Policy</Text>
        <Text className="text-gray-300  mt-2">
          Please review our privacy policy before proceeding. By continuing, you
          agree to our terms.
        </Text>
      </View>

      <View className="flex-1">
        <ScrollView className="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <Text className="text-gray-300 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta... Your data is
            protected under our strict privacy policies. We do not share your
            information with third parties without your consent. Continued usage
            of our services implies your acceptance of these terms.
          </Text>
        </ScrollView>
      </View>

      <View className="w-full py-4 bg-gray-900">
        <TouchableOpacity
          className="bg-orange-600 py-4 rounded-md shadow-md active:bg-orange-700"
          onPress={handleAccept}
        >
          <Text className="text-white font-bold text-center text-lg">
            Accept & Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
