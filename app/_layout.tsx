import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFA500"
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home"
        }}
      />
      <Stack.Screen
        name="notes"
        options={{
          headerTitle: "Notes"
        }}
      />
    </Stack>
  );
}
