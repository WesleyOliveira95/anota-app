import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { Nota } from "@/types";

type NotasContextType = {
    notas: Nota[];
    addNota: (title: string, body: string) => Nota;
};

const STORAGE_KEY = "notas_app";

const NotasContext = createContext<NotasContextType | null>(null);

const uid = () => Math.random().toString(36).slice(2, 10);

export const NotasProvider = ({ children }: { children: ReactNode }) => {
    const [notas, setNotas] = useState<Nota[]>([]);

    // carregar notas quando o app iniciar
    useEffect(() => {
        carregarNotas();
    }, []);

    const carregarNotas = async () => {
        try {
            const data = await AsyncStorage.getItem(STORAGE_KEY);

            if (data !== null) {
                setNotas(JSON.parse(data));
            }
        } catch (error) {
            console.log("Erro ao carregar notas", error);
        }
    };

    // salvar notas sempre que mudar
    const salvarNotas = async (lista: Nota[]) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
        } catch (error) {
            console.log("Erro ao salvar notas", error);
        }
    };

    const addNota = (title: string, body: string) => {

        const t = title.trim();
        const b = body.trim();

        const nota: Nota = {
            id: uid(),
            title: t,
            body: b,
            pinned: false,
            updatedAt: Date.now()
        };

        const novaLista = [nota, ...notas];

        setNotas(novaLista);

        salvarNotas(novaLista);

        return nota;
    };

    return (
        <NotasContext.Provider value={{ notas, addNota }}>
            {children}
        </NotasContext.Provider>
    );
};

export function useNotas() {
    const ctx = useContext(NotasContext);
    if (!ctx) {
        throw new Error('As Notas devem ser usadas dentro do Provedor de Notas');
    }
    return ctx;
}
