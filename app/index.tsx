import { colors } from "@/lib/colors";
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Stack.Screen 
        options={{
          title: 'Notas'
        }}
      />
      <Link href={'./nota/new'} asChild>
        <Text style={{
          alignSelf: 'flex-end',
          paddingHorizontal: 14,
          paddingVertical: 10,
          borderRadius: 12,
          backgroundColor: colors.accent,
          color: colors.text,
          fontWeight: '600',
          overflow: 'hidden',
          marginRight: 12,
          marginTop: 12
        }}>
          Adicionar Nota
        </Text>
      </Link>
    </View>
  ); 
}
