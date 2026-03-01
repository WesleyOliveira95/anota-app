import { NotasProvider } from "@/hooks/useNotas";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "../lib/colors";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <NotasProvider>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: colors.bg },
            headerTitleStyle: { color: colors.text },
            contentStyle: { backgroundColor: colors.bg }
          }}
        />
      </NotasProvider>
    </SafeAreaProvider>
  );
};
