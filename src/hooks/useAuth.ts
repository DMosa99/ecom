import { useMutation, useQuery } from "@tanstack/react-query";
import type { AuthResponse, RegisterResponse, User } from "../types/api";
import { getProfile, login, register } from "../api/auth";

export const useLogin = () => {
  return useMutation<
    AuthResponse,
    unknown,
    { email: string; password: string }
  >({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
};

export const useRegister = () => {
  return useMutation<
    RegisterResponse,
    unknown,
    { email: string; password: string }
  >({
    mutationFn: ({ email, password }) => register(email, password),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export const useProfile = () => {
  return useQuery<User, unknown>({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
