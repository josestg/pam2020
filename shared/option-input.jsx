import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export function OptionsInput(props) {
  const { label, iconRender, style, options, selected, onSelect } = props;
  const [foucesed, setFocused] = useState(false);

  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputBox}>
        {iconRender(foucesed)}
        <View style={{ flex: 1, paddingVertical: 21 }}>
          <Picker
            style={{ flex: 1 }}
            selectedValue={selected.value}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onValueChange={(value) => onSelect(value)}
          >
            {options.map((opt) => (
              <Picker.Item
                key={opt.value}
                label={opt.label}
                value={opt.value}
              />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 12,
  },
  inputBox: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
    borderRadius: 8,
    shadowColor: "#333",
    alignItems: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
