import { create } from 'zustand';

export const useVistaStore = create((set) => ({
    //estado
    vistaActiva: 'welcome',
    //funciones que modifica el estado
    cambiarVista: (nuevaVista) => set({ vistaActiva: nuevaVista }),
}));
