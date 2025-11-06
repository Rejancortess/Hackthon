import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Role = "user" | "volunteer" | null;

interface AuthState {
  isAuthenticated: boolean;
  isOnboardingCompleted: boolean;
  username: string | null;
  role: Role;

  login: () => void;
  logout: () => void;
  completeOnboarding: () => void;
  setUsername: (name: string) => void;
  setRole: (role: Role) => void;
  clearRole: () => void;
}

const useAuthStore = create(
  persist<AuthState>(
    set => ({
      isAuthenticated: false,
      isOnboardingCompleted: false,
      username: null,
      role: null,

      login: () => set({ isAuthenticated: true }),
      logout: () =>
        set({
          isAuthenticated: false,
          isOnboardingCompleted: false,
          username: null,
          role: null,
        }),

      completeOnboarding: () => set({ isOnboardingCompleted: true }),

      setUsername: name => set({ username: name }),
      setRole: role => set({ role }),
      clearRole: () => set({ role: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useAuthStore;
