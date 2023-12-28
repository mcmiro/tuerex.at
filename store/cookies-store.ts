import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useCookiesStore = create(
  persist(
    (set: any) => ({
      cookiesValue: false,
      updateCookiesValue: (newValue: boolean) =>
        set({ cookiesValue: newValue }),
    }),
    {
      name: 'cookies-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCookiesStore;
