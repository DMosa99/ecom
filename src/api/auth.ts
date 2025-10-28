import api from ".";
import type { AuthResponse, RegisterResponse, User } from "../types/api";

export const login = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  const res = await api.post<AuthResponse>("/auth/login", { email, password });
  return res.data;
};

export const register = async (
  email: string,
  password: string,
): Promise<RegisterResponse> => {
  const res = await api.post<RegisterResponse>("/auth/register", {
    email,
    password,
  });
  return res.data;
};

export const getProfile = async (): Promise<User> => {
  const res = await api.get<User>("/profile");
  return res.data;
};
