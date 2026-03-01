import { colors } from "@/lib/colors";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { TextInput, View } from "react-native";

const NotaEditorScreen = () => {
    const { id } = useLocalSearchParams();
    const isNew = id === 'new';

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen 
                options={{ 
                    title: isNew ? "Criar Nota" : "Editar Nota" 
                }} 
            />
            <View style={{ padding: 16, gap: 12 }}>
                <TextInput
                    placeholder="Titulo da anotação"
                    placeholderTextColor={colors.sub}
                    value={title}
                    onChangeText={setTitle}
                    style={{
                        backgroundColor: colors.card,
                        color: colors.text,
                        paddingHorizontal: 14,
                        paddingVertical: 12,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: colors.border,
                        fontWeight: 700 
                    }}
                />
                    <TextInput
                    placeholder="Digite sua nota aqui..."
                    placeholderTextColor={colors.sub}
                    value={body}
                    onChangeText={setBody}
                    style={{
                        backgroundColor: colors.card,
                        color: colors.text,
                        paddingHorizontal: 14,
                        paddingVertical: 12,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: colors.border,
                        fontWeight: 700 
                    }}
                />
            </View>
        </View>
    );
};

export default NotaEditorScreen;