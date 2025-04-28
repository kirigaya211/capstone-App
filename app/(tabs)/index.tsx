import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import SearchBar from "@/components/searchBar";
import {useRouter} from "expo-router";

export default function Index(){
  const router = useRouter();

// Removed unused import

const chats = [
  {
    id: "1",
    name: "Cute kitten❤️",
    message: "Work overtime. I'll be back later.",
    time: "10:02",
    unread: 0,
    avatar: "https://placekitten.com/100/100",
  },
  {
    id: "2",
    name: "NYC basketball group",
    message: "Cuy: Let's meet at the stadium tonight!",
    time: "09:36",
    unread: 0,
    avatar: "https://via.placeholder.com/100x100.png?text=Group",
  },
  {
    id: "3",
    name: "Steve",
    message: "Don't leave after training tonight!",
    time: "09:20",
    unread: 5,
    avatar: "https://via.placeholder.com/100x100.png?text=Steve",
  },
  {
    id: "4",
    name: "Alvika",
    message: "I'll pay you a visit tomorrow.",
    time: "08:55",
    unread: 1,
    avatar: "https://via.placeholder.com/100x100.png?text=Alvika",
  },
  {
    id: "5",
    name: "Purchasing",
    message: "[Someone@me] Jade: I'll be back Wednesday...",
    time: "Yesterday",
    unread: 0,
    avatar: "https://via.placeholder.com/100x100.png?text=Purchasing",
  },
  {
    id: "6",
    name: "Mjstyle",
    message: "You've got credits...",
    time: "Yesterday",
    unread: 0,
    avatar: "https://via.placeholder.com/100x100.png?text=Mjstyle",
  },
  {
    id: "7",
    name: "Edwards",
    message: "I've packed and sent it to you.",
    time: "Yesterday",
    unread: 0,
    avatar: "https://via.placeholder.com/100x100.png?text=Edwards",
  },
  {
    id: "8",
    name: "Notifications",
    message: "Luckin coffee: I'm back.",
    time: "Yesterday",
    unread: 0,
    avatar: "https://via.placeholder.com/100x100.png?text=Notifications",
  },
];


  return (
    <View className="flex-1 bg-white">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-4 py-2 border-b border-gray-200">
        {/* <Text className="text-lg font-bold">Chats ({chats.length})</Text> */}
        <View className="flex-1 mt-5">
          <SearchBar onPress={()=>router.push("/search")}
            placeholder="Search for a movie"
            />
        </View>
      </View>
      {/* Chat List */}
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row items-center px-4 py-3 border-b border-gray-100">
            <View className="relative">
              <Image
                source={{ uri: item.avatar }}
                className="w-12 h-12 rounded-full"
              />
              {item.unread > 0 && (
                <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                  <Text className="text-white text-xs">{item.unread}</Text>
                </View>
              )}
            </View>
            <View className="flex-1 ml-4">
              <View className="flex-row justify-between">
                <Text className="font-semibold">{item.name}</Text>
                <Text className="text-xs text-gray-400">{item.time}</Text>
              </View>
              <Text className="text-gray-500 mt-1" numberOfLines={1}>
                {item.message}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

     
    </View>
  );
}
