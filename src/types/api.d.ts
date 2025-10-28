export interface AuthResponse {
  token: string;
}

export interface User {
  id: number;
  email: string;
  created_at: string;
}

export interface RegisterResponse {
  message: string;
  user: Pick<User, "id" | "email">;
}
