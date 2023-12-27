import { create } from 'zustand'

type FieldType = "Text court" | "Text long" | "Checkbox"

type LineItem = {
    fiedlType: FieldType,
    label: string;
    charactersLimit: number,
    setFiedlType: (fiedlType: FieldType) => void
    setLabel: (label: string) => void,
    setcharactersLimit: (limit: number) => void
}

export const useLineTime =  create<LineItem>((set)=>({
 fiedlType: "Text court",
 label: "Your label",
 charactersLimit: 0,
 setFiedlType: (fiedlType) => set(() => ({ fiedlType: fiedlType })),
 setLabel: (label) => set(() => ({ label: label})),
 setcharactersLimit: (limit) => set(()=>({ charactersLimit: limit }))
}))