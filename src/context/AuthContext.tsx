import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  email: string;
  password: string;
};

type AuthContextType = {
  users: User[];
  addUser: (user: User) => void;
  login: (email: string, password: string) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  const login = (email: string, password: string) => {
    return users.some((u) => u.email === email && u.password === password);
  };

  return (
    <AuthContext.Provider value={{ users, addUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

