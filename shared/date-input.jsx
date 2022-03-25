import React, { useState } from "react";
import {
  TextInput as RNTextInput,
  View,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export function DateInput(props) {
  const { label, iconRender, style, placeholder, value, onChange, mode } =
    props;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [foucesed, setFocused] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const d = new Date(date);
    onChange(mode === "date" ? d.toLocaleDateString() : d.toLocaleTimeString());
    hideDatePicker();
  };

  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={styles.label}>{label}</Text>
      <Pressable onPress={showDatePicker}>
        <View style={styles.input}>
          {iconRender(foucesed)}

          <RNTextInput
            editable={false}
            style={styles.editor}
            placeholder={placeholder}
            value={value}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </View>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 12,
  },
  editor: {
    paddingVertical: 8,
    paddingLeft: 4,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
    paddingHorizontal: 4,
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
