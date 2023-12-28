import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useSlackStore = create(
  persist(
    (set: any) => ({
      slackValue: false,
      updateSlackValue: (newValue: boolean) => set({ slackValue: newValue }),
    }),
    {
      name: 'slack-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useSlackStore;
