import { View, Text, TouchableOpacity, FlatList, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

// Define a type for the path
interface Path {
  id: string;
  name: string;
  date: string;
}

export default function PathCollection() {
  const navigation = useNavigation();

  const [paths, setPaths] = useState<Path[]>([
    { id: "1", name: "Path 1", date: "2025-02-16" },
    { id: "2", name: "Path 2", date: "2025-02-15" },
    { id: "3", name: "Path 3", date: "2025-02-14" },
    { id: "4", name: "Path 4", date: "2025-02-13" },
    { id: "5", name: "Path 5", date: "2025-02-12" },
    { id: "6", name: "Path 6", date: "2025-02-11" },
  ]);

  const handleGoBack = () => {
    navigation.navigate("home");
  };

  // Handle clicking on a path
  const handlePathClick = (id: string) => {
    // Navigate to the path details page or perform some action with the path
    console.log(`Clicked on path with ID: ${id}`);
    // You can add navigation logic here if needed
  };

  // Render each item (path)
  const renderItem = ({ item }: { item: Path }) => (
    <TouchableOpacity
      className="bg-gray-800 p-4 rounded-md mb-4 w-1/3" // Adjust width here to make paths wider
      onPress={() => handlePathClick(item.id)}
    >
      <Text className="text-white text-lg font-semibold">{item.name}</Text>
      <Text className="text-gray-300">{item.date}</Text>
    </TouchableOpacity>
  );

  // Function to add a new path
  const addPath = () => {
    const newPath: Path = {
      id: (paths.length + 1).toString(),
      name: `Path ${paths.length + 1}`,
      date: new Date().toLocaleDateString(),
    };
    setPaths([...paths, newPath]);
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

      {/* Grid of Paths */}
      <View className="flex-1 p-4">
        <FlatList
          data={paths}
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

      {/* Add Path Button */}
      <View className="p-4">
        <Button title="Add Path" onPress={addPath} />
      </View>
    </View>
  );
}
