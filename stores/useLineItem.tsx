import { create } from "zustand";

type FieldType = "Text court" | "Text long" | "Checkbox";

type LineItem = {
  fiedlType: FieldType;
  label: string;
  charactersLimit: number;
  required: boolean;
  setFiedlType: (fiedlType: FieldType) => void;
  setLabel: (label: string) => void;
  setcharactersLimit: (limit: number) => void;
  toggleRequired: () => void;
};

export const useLineTime = create<LineItem>((set) => ({
  fiedlType: "Text court",
  label: "Globglogabgalab",
  charactersLimit: 0,
  required: true,
  setFiedlType: (fiedlType) => set(() => ({ fiedlType: fiedlType })),
  setLabel: (label) => set(() => ({ label: label })),
  setcharactersLimit: (limit) => set(() => ({ charactersLimit: limit })),
  toggleRequired: () => set((state) => ({ required: !state.required })),
}));
