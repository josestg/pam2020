import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Cancellations, Home, Orders, Others } from "./screen";

const Tab = createBottomTabNavigator();
const screens = {
  Home: "Home",
  Orders: "Orders",
  Cancellation: "Cancellation",
  Others: "Others",
};

function getIconName(screenName, focused) {
  switch (screenName) {
    case screens.Home:
      return focused ? "home" : "home-outline";
    case screens.Orders:
      return focused ? "cart" : "cart-outline";
    case screens.Cancellation:
      return focused ? "time" : "time-outline";
    default:
      return focused ? "menu" : "menu-outline";
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = getIconName(route.name, focused);
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={screens.Home} component={Home} />
        <Tab.Screen name={screens.Orders} component={Orders} />
        <Tab.Screen name={screens.Cancellation} component={Cancellations} />
        <Tab.Screen name={screens.Others} component={Others} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
