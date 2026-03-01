import { NotaItem } from "@/components/NotaItem";
import { useNotas } from "@/hooks/useNotas";
import { colors } from "@/lib/colors";
import { Link, Stack } from "expo-router";
import { FlatList, Text, View } from "react-native";

export default function Index() {
  const {notas} =   useNotas();

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

    <FlatList
      contentContainerStyle={{padding: 16, gap: 12}}
      data={notas}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
       <NotaItem 
          key={index}
          item={item}  
          onTogglePin={() => true}
          onRemove={() => true} 
        />
      )}
    />
    </View>
  );
};