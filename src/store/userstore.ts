import { create } from "zustand";
import { loginUser, registerUser, verifyAccount, resendOtp, resetPassword, forgetPassword, changePassword, logoutUser } from "../services/authService";

interface User {
  id?: number;
  name?: string;
  email?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (firstName: string,lastName:string, email: string, password: string) => Promise<void>;
  resendOtp:(email: string) => Promise<void>;
  resetPassword:(email: string,resetCode:string ,newPassword: string) => Promise<void>;
  changePassword:(currentPassword: string, newPassword: string) => Promise<void>;
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
      console.log(err);
  let errorMsg = "Registration failed";

  if (err.response?.data?.errors) {
    const errors = err.response.data.errors;

    const firstKey = Object.keys(errors)[0];

    if (firstKey && errors[firstKey]?.length > 0) {
      errorMsg = errors[firstKey][0];
    }
  } else if (err.response?.data?.title) {
    errorMsg = err.response.data.title;
  }
  set({ error: errorMsg, loading: false  });
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
  resetPassword: async (email,resetCode,newPassword) => {
    set({ loading: true, error: null });
    try {
      await resetPassword(email,resetCode,newPassword);
      set({ loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.error || "error", loading: false });
    }
  },

  changePassword: async (currentPassword, newPassword) => {
    set({ loading: true, error: null });
    try {
      await verifyAccount(currentPassword,newPassword);
      set({ loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.error || "error", loading: false });
    }
  },

  verifyAccount: async (email,otp) => {
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
      set({ loading: false,user: {
        id: res.data?.id,         
        name: `${firstName} ${lastName}`,
        email: email,            
      }, });
    } catch (err: any) {
  let errorMsg = "Registration failed";

  if (err.response?.data?.errors) {
    const errors = err.response.data.errors;

    const firstKey = Object.keys(errors)[0];

    if (firstKey && errors[firstKey]?.length > 0) {
      errorMsg = errors[firstKey][0];
    }
  } else if (err.response?.data?.title) {
    errorMsg = err.response.data.title;
  }
  set({ error: errorMsg, loading: false  });
}

  },
  logout: () => {
    logoutUser().catch(() => {});
    set({ user: null, token: null });
    localStorage.removeItem("token");
  },
}));
