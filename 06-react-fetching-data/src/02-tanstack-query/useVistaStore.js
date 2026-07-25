import { create } from 'zustand';

export const useVistaStore = create((set) => ({
  // estado: la vista que está actualmente activa
  vistaActiva: 'welcome',
  // función que permite cambiar ese estado
  cambiarVista: (nuevaVista) => set({ vistaActiva: nuevaVista }),
}));
