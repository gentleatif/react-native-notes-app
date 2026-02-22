import { StyleSheet, Text, View } from "react-native";

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text>Notes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
