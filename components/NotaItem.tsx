import { Nota } from "@/types";
import { Pressable, Text, View } from "react-native";
import { colors } from "../lib/colors";


export const NotaItem = ({
    item,
     onTogglePin,
     onRemove
    }: {
        item: Nota;
        onTogglePin: (id: string) => void;
        onRemove: (id: string) => void;
    }) => {

        const onEdit = () => {

        }
    

    return (
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: colors.sub,
          padding: 14,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: colors.border,
          gap: 6,
          opacity: pressed ? 0.9 : 1
        })}  
      >

        <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
        }}>
            <Text style={{ color: colors.text, fontSize: 16, fontWeight: '700' }}>
                {item.title}
            </Text>

            <View style={{flexDirection: 'row', gap: 8}}>    
                <Pressable onPress={() => onTogglePin(item.id)}>
                    <Text style={{ color: colors.card}}>Pin</Text>
                </Pressable>

                <Pressable onPress={onEdit}>
                    <Text style={{ color: colors.card}}>Editar</Text>
                </Pressable>

                <Pressable onPress={() => onRemove(item.id)}>
                    <Text style={{ color: colors.card}}>Deletar</Text>
                </Pressable>
            </View>
        </View>

        <Text numberOfLines={4} style={{ color: colors.card, fontSize: 14 }}>
            {item.body}
        </Text>

        <Text  style={{ color: colors.card, fontSize: 12 }}>
            Update {new Date(item.updatedAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            })}
        </Text>

      </Pressable>
    );
};