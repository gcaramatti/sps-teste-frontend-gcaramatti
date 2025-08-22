import { create } from 'zustand';

export const useUser = create((set) => ({
    authUser: {},
    setAuthUser: (user) => {
      set({ authUser: user });
    },
    logout: () => {
      localStorage.removeItem('token');
      set({ authUser: {} });
    }
}));
