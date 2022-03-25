import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrderInputs } from "./order-inputs";
import { OrderPreviews } from "./order-preview";

const Stack = createNativeStackNavigator();

export function Home() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inputs" component={OrderInputs} />
      <Stack.Screen name="Previews" component={OrderPreviews} />
    </Stack.Navigator>
  );
}
