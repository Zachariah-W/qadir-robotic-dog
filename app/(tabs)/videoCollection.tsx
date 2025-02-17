import { View, Text, TouchableOpacity, FlatList, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

// Define a type for the recording
interface Recording {
  id: string;
  name: string;
  date: string;
}

export default function VideoCollection() {
  const navigation = useNavigation();

  const [recordings, setRecordings] = useState<Recording[]>([
    { id: "1", name: "Recording 1", date: "2025-02-16" },
    { id: "2", name: "Recording 2", date: "2025-02-15" },
    { id: "3", name: "Recording 3", date: "2025-02-14" },
    { id: "4", name: "Recording 4", date: "2025-02-13" },
    { id: "5", name: "Recording 5", date: "2025-02-12" },
    { id: "6", name: "Recording 6", date: "2025-02-11" },
  ]);

  const handleGoBack = () => {
    navigation.navigate("home");
  };

  // Handle clicking on a recording
  const handleRecordingClick = (id: string) => {
    // Navigate to the recording details page or play the video
    console.log(`Clicked on recording with ID: ${id}`);
    // You can add navigation logic here if needed
  };

  // Render each item (recording)
  const renderItem = ({ item }: { item: Recording }) => (
    <TouchableOpacity
      className="bg-gray-800 p-4 rounded-md mb-4 w-1/3" // Adjust width here to make recordings wider
      onPress={() => handleRecordingClick(item.id)}
    >
      <Text className="text-white text-lg font-semibold">{item.name}</Text>
      <Text className="text-gray-300">{item.date}</Text>
    </TouchableOpacity>
  );

  // Function to add a new recording
  const addRecording = () => {
    const newRecording: Recording = {
      id: (recordings.length + 1).toString(),
      name: `Recording ${recordings.length + 1}`,
      date: new Date().toLocaleDateString(),
    };
    setRecordings([...recordings, newRecording]);
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

      {/* Grid of Recordings */}
      <View className="flex-1 p-4">
        <FlatList
          data={recordings}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "space-between",
            gap: 16, // Adds gap between columns (horizontal gap)
          }}
          contentContainerStyle={{
            paddingBottom: 16, // Adds gap between rows (vertical gap)
          }}
        />
      </View>

      {/* Add Recording Button */}
      <View className="p-4">
        <Button title="Add Recording" onPress={addRecording} />
      </View>
    </View>
  );
}
