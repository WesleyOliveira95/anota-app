import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const NotaEditorScreen = () => {
    const { id } = useLocalSearchParams();
    const isNew = id === 'new';

    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen 
                options={{ 
                    title: isNew ? "Nova Nota" : "Editar Nota" 
                }} 
            />
        </View>
    );
};

export default NotaEditorScreen;