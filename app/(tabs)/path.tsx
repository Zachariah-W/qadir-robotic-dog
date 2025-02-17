import { View, Text, TouchableOpacity, FlatList, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

// Define a type for moves
interface Move {
  id: string;
  command: string;
  speed: number;
}

export default function Path() {
  const navigation = useNavigation();

  // Fixed commands
  const commands = [
    "Stand up",
    "Sit down",
    "Forward",
    "Backward",
    "Left",
    "Right",
  ];

  // Sample moves
  const [moves, setMoves] = useState<Move[]>([
    { id: "1", command: "Stand up", speed: 2 },
    { id: "2", command: "Sit down", speed: 3 },
    { id: "3", command: "Forward", speed: 5 },
    { id: "4", command: "Backward", speed: 1 },
    { id: "5", command: "Left", speed: 4 },
    { id: "6", command: "Right", speed: 2 },
  ]);

  const handleGoBack = () => {
    navigation.navigate("pathCollection");
  };

  const handleMoveClick = (id: string) => {
    console.log(`Clicked on move with ID: ${id}`);
  };

  const renderItem = ({ item }: { item: Move }) => (
    <TouchableOpacity
      className="bg-gray-800 p-4 rounded-md mb-4 w-1/3"
      onPress={() => handleMoveClick(item.id)}
    >
      <Text className="text-white text-lg font-semibold">
        Command: {item.command}
      </Text>
      <Text className="text-gray-300">Speed: {item.speed}</Text>
    </TouchableOpacity>
  );

  const addMove = () => {
    const newMove: Move = {
      id: (moves.length + 1).toString(),
      command: commands[Math.floor(Math.random() * commands.length)], // Random command
      speed: Math.floor(Math.random() * 5) + 1, // Random speed (1-5)
    };
    setMoves([...moves, newMove]);
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

      {/* Grid of Commands */}
      <View className="flex-1 p-4">
        <FlatList
          data={moves}
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

      {/* Add Command Button */}
      <View className="p-4">
        <Button title="Add Command" onPress={addMove} />
      </View>
    </View>
  );
}
