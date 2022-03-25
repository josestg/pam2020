import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { DateInput, OptionsInput, TextInput } from "./shared";
import { useState, useEffect } from "react";

export default function App() {
  const [serviceClass, setServiceClass] = useState("ekonomi");
  const [serviceOptions, setServiceOptions] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setServiceOptions([
      { value: "ekonomi", label: "Ekonomi" },
      { value: "bisnis", label: "Bisnis" },
      { value: "eksekutif", label: "eksekutif" },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        label="Asal"
        placeholder="Masukkan pelabuhan asal"
        iconRender={(focused) => (
          <Fontisto name="ship" size={24} color={focused ? "green" : "black"} />
        )}
      />
      <TextInput
        label="Tujuan"
        placeholder="Masukkan pelabuhan tujuan"
        iconRender={(focused) => (
          <Fontisto name="ship" size={24} color={focused ? "green" : "black"} />
        )}
      />
      <OptionsInput
        label="Kelas Layanan"
        placeholder="Pilih layanan"
        iconRender={(focused) => (
          <MaterialCommunityIcons
            name="seat-passenger"
            size={24}
            color={focused ? "green" : "black"}
          />
        )}
        selected={{ value: serviceClass }}
        onSelect={(selected) => setServiceClass(selected)}
        options={serviceOptions}
      />
      <DateInput
        label="Tanggal Keberangkatan"
        placeholder="Masukkan pelabuhan tujuan"
        value={date}
        mode={"date"}
        onChange={(value) => setDate(value)}
        iconRender={() => <MaterialCommunityIcons name="calendar" size={24} />}
      />
      <DateInput
        label="Jam Keberankatan"
        placeholder="Masukkan jam keberangkatan"
        value={time}
        mode={"time"}
        onChange={(value) => setTime(value)}
        iconRender={() => <MaterialCommunityIcons name="clock" size={24} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
