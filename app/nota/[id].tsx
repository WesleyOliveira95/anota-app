import { useNotas } from "@/hooks/useNotas";
import { colors } from "@/lib/colors";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

const NotaEditorScreen = () => {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();
    const isNew = id === 'new';

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const { addNota } = useNotas();

    const isDisabled = title.length <= 0 || body.length <= 0;

    const salvar = () => {
        if(isNew){
            addNota(title, body);
        }
        navigation.goBack();
    };

    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen 
                options={{ 
                    title: isNew ? "Criar Nota" : "Editar Nota" 
                }} 
            />
            <View style={{ padding: 16, gap: 12, flex: 1 }}>
                
                <TextInput
                    placeholder="Titulo da anotação"
                    placeholderTextColor={colors.card}
                    value={title}
                    onChangeText={setTitle}
                    style={{
                        backgroundColor: colors.sub,
                        color: colors.text,
                        paddingHorizontal: 14,
                        paddingVertical: 12,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: colors.border,
                        fontWeight: 700, 
                        fontSize: 18
                    }}
                />

                    <TextInput
                    placeholder="Digite sua nota aqui..."
                    placeholderTextColor={colors.card}
                    value={body}
                    onChangeText={setBody}
                    multiline
                    style={{
                        flex: 1,
                        minHeight: 200,
                        backgroundColor: colors.sub,
                        color: colors.text,
                        paddingHorizontal: 14,
                        paddingVertical: 12,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: colors.border,
                        fontWeight: 700,
                        textAlignVertical: 'top', 
                        fontSize: 16
                    }}
                />
                <Pressable style={{marginBottom: 12}} disabled={isDisabled} onPress={salvar}>
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
                        marginBottom: 20,
                        opacity: isDisabled ? 0.5 : 1
                    }}
                >
                    Salvar
                </Text>
            </Pressable>

            </View>
        </View>
    );
};

export default NotaEditorScreen;