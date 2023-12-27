import { create } from 'zustand'

type FieldType = "Text court" | "Text long" | "Checkbox"

type LineItem = {
    fiedlType: FieldType,
    label: string;
    setFiedlType: (fiedlType: FieldType) => void
    setLabel: (label: string) => void,
}

export const useLineTime =  create<LineItem>((set)=>({
 fiedlType: "Text court",
 label: "Your label",
 setFiedlType: (fiedlType) => set(() => ({ fiedlType: fiedlType })),
 setLabel: (label) => set(() => ({ label: label})),
}))