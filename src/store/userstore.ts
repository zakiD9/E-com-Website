import { create } from "zustand";
import { loginUser, registerUser, verifyAccount, resendOtp, resetPassword, forgetPassword, changePassword, logoutUser } from "../services/authService";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (firstName: string,lastName:string, email: string, password: string) => Promise<void>;
  resendOtp:(email: string) => Promise<void>;
  verifyAccount:(email: string,otp:string) => Promise<void>;
  forgetPassword:(email: string) => Promise<void>;
  logout: () => void;
}

export const useUserStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await loginUser(email, password);
      console.log(res);
      const { user, token } = res.data;

      set({ user, token, loading: false });

      localStorage.setItem("token", token);
    } catch (err: any) {
      set({ error: err.response?.data?.error || "Login failed", loading: false });
    }
  },
  forgetPassword:async (email) => {
    set({ loading: true, error: null });
    try {
      await forgetPassword(email);
      set({ loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.error || "try again", loading: false });
    }
  },
  verifyAccount:async (email,otp) => {
    set({ loading: true, error: null });
    try {
      await verifyAccount(email,otp);
      set({ loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.error || "try later", loading: false });
    }
  },

  resendOtp: async (email) => {
    set({ loading: true, error: null });
    try {
      await resendOtp(email);
      set({ loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.error || "try again", loading: false });
    }
  },

  register: async (firstName, lastName, email, password) => {
    set({ loading: true, error: null });
    try {
      await registerUser({ firstName, lastName, email, password });
      set({ loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.error || "Registration failed", loading: false });
    }
  },
  logout: () => {
    logoutUser().catch(() => {});
    set({ user: null, token: null });
    localStorage.removeItem("token");
  },
}));
