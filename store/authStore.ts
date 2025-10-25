import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  isOnboardingCompleted: boolean;
  login: () => void;
  logout: () => void;
  completeOnboarding: () => void;
}

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuthenticated: false,
      isOnboardingCompleted: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => {
        set({ isAuthenticated: false, isOnboardingCompleted: false });
      },
      completeOnboarding: () => set({ isOnboardingCompleted: true }),
    }),
    {
      name: "auth-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useAuthStore;
