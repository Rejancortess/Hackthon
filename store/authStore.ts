import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  isOnboardingCompleted: boolean;
  login: () => void;
  logout: () => void;
  completeOnboarding: () => void;
}

const useAuthStore = create(
  persist<AuthState>(
    set => ({
      isAuthenticated: false,
      isOnboardingCompleted: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => {
        set({ isAuthenticated: false, isOnboardingCompleted: false });
      },
      completeOnboarding: () => set({ isOnboardingCompleted: true }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useAuthStore;
