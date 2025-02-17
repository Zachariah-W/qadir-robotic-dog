import { View, Text, TouchableOpacity, FlatList, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

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

  const handlePathClick = (id: string) => {
    console.log(`Clicked on path with ID: ${id}`);
  };

  const renderItem = ({ item }: { item: Path }) => (
    <TouchableOpacity
      className="bg-gray-800 p-4 rounded-md mb-4 w-1/3"
      onPress={() => handlePathClick(item.id)}
    >
      <Text className="text-white text-lg font-semibold">{item.name}</Text>
      <Text className="text-gray-300">{item.date}</Text>
    </TouchableOpacity>
  );

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
      <View className="flex-row gap-4 justify-between items-center px-10 py-4 bg-gray-800">
        <TouchableOpacity onPress={handleGoBack}>
          <Text className="text-white font-bold">Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white font-bold">Settings</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 p-4">
        <FlatList
          data={paths}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "space-between",
            gap: 16,
          }}
          contentContainerStyle={{
            paddingBottom: 16,
          }}
        />
      </View>

      <View className="p-4">
        <Button title="Add Path" onPress={addPath} />
      </View>
    </View>
  );
}
