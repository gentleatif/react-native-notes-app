import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type AddNoteButtonProps = {
  onPress: () => void;
};

export function AddNoteButton({ onPress }: AddNoteButtonProps) {
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity
      style={[styles.button, { marginBottom: insets.bottom + 16 }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}> + Add Note</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  }
});
