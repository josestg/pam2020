import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext, useState } from "react";
import { OrdersContext } from "../context/orders";
import { SafeAreaView } from "react-native-safe-area-context";
import { DeleteConfirm, Ticket } from "../shared";
import { TouchableOpacity } from "react-native";

export function Orders() {
  const { orders, cancelOrder } = useContext(OrdersContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState("");

  const onYes = () => {
    setModalVisible(false);
    cancelOrder(selected);
  };

  const onNo = (id) => {
    setModalVisible(false);
  };

  const onCancel = (id) => {
    setModalVisible(true);
    setSelected(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <DeleteConfirm visible={modalVisible} onYes={onYes} onNo={onNo} />
      <FlatList
        style={{ width: "100%" }}
        data={orders}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => onCancel(item.id)}>
              <Ticket data={item.ticket} />
            </TouchableOpacity>
          );
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
