export interface Credentials {
  username: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  role: 'admin' | 'manager' | 'staff';
  branches: number[];
}

export interface LoginState {
  loading: boolean;
  error: string | null;
  token: string | null;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}