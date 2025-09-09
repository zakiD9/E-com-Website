import api from "./api";

export const loginUser = (email: string, password: string) => {
  return api.post("/auth/login", { email, password });
};

export const registerUser = (data: { firstName:string; lastName:string; email: string; password: string }) => {
  return api.post("/auth/register", data);
};

export const verifyAccount = (email: string, otp: string) => {
  return api.post("/auth/verify-account", { email, otp });
};

export const resendOtp = (email: string) => {
  return api.post("/auth/verify-account/resend-otp", {email});
};

export const resetPassword = (email: string,resetCode:string ,newPassword: string) => {
  return api.post("/auth/reset-password", { email,resetCode ,newPassword });
};

export const forgetPassword = (email: string) => {
  return api.post("/auth/reset-password/send-otp", {email});
};

export const changePassword = (currentPassword: string, newPassword: string) => {
  return api.post("/auth/change-password", { currentPassword, newPassword });
};

export const logoutUser = () => {
  return api.post("/auth/logout");
};
