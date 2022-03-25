import { useContext } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OrdersContext } from "../context/orders";
import { Ticket } from "../shared";

export function Cancellations() {
  const { canceled } = useContext(OrdersContext);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={canceled}
        renderItem={({ item }) => {
          return <Ticket data={item.ticket} />;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 16,
  },
});
