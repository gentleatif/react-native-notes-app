import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/post-it.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to the Notes App</Text>
      <Text style={styles.subtitle}>Capture your thoughts and ideas</Text>

      <TouchableOpacity
        onPress={() => {
          router.push("/notes");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000"
  },
  subtitle: {
    fontSize: 16,
    color: "#000",

    marginBottom: 20,
    marginTop: 10
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  }
});
