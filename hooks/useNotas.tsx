import { createContext, ReactNode, useContext, useState } from "react";

import { Nota } from "@/types";

type NotasContextType = {
    notas: Nota[];
    addNota: (title: string, body: string) => Nota;
};

const NotasContext = createContext<NotasContextType | null>(null);

const uid = () => Math.random().toString(36).slice(2, 10);

export const NotasProvider = ({ children }: { children: ReactNode }) => {
    const [notas, setNotas] = useState<Nota[]>([]);

    const addNota = (title: string, body: string) => {
        const t = title.trim()
        const b = body.trim()
        const nota: Nota = {
            id: uid(),
            title: t,
            body: b,
            pinned: false,
            updatedAt: Date.now()
        }
        setNotas(prev => [nota, ...prev]);
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
};