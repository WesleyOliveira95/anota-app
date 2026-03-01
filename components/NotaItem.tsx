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
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
        <Text style={{ color: colors.text, fontSize: 16, fontWeight: '700' }}>
            {item.title}
        </Text>

        <View>    
            <Pressable onPress={() => onTogglePin(item.id)}>
                <Text style={{ color: colors.sub}}>Pin</Text>
            </Pressable>

            <Pressable onPress={onEdit}>
                <Text style={{ color: colors.sub}}>Editar</Text>
            </Pressable>

            <Pressable onPress={onRemove}>
                <Text style={{ color: colors.sub}}>Deletar</Text>
            </Pressable>
        </View>

        </View>
    );
};