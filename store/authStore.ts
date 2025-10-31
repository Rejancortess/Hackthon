import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  isOnboardingCompleted: boolean;
  username: string | null;
  login: () => void;
  logout: () => void;
  completeOnboarding: () => void;
  setUsername: (name: string) => void;
}

const useAuthStore = create(
  persist<AuthState>(
    set => ({
      isAuthenticated: false,
      isOnboardingCompleted: false,
      username: null,

      login: () => set({ isAuthenticated: true }),
      logout: () =>
        set({
          isAuthenticated: false,
          isOnboardingCompleted: false,
          username: null,
        }),
      completeOnboarding: () => set({ isOnboardingCompleted: true }),

      setUsername: name => set({ username: name }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useAuthStore;
