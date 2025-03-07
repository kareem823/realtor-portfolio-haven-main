
import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
  import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
  import { User, LoginUser } from "../shared/schema";
  
  interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    loginMutation: ReturnType<typeof useLoginMutation>;
    registerMutation: ReturnType<typeof useRegisterMutation>;
    logoutMutation: ReturnType<typeof useLogoutMutation>;
  }
  
  export const AuthContext = createContext<AuthContextType | null>(null);
  
  export function AuthProvider({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const queryClient = useQueryClient();
  
    const { data: user, isSuccess } = useQuery({
      queryKey: ["auth-user"],
      queryFn: async () => {
        const token = localStorage.getItem('authToken');
        
        if (!token) {
          return null;
        }
  
        const res = await fetch("/api/user", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!res.ok) {
          if (res.status === 401) {
            localStorage.removeItem('authToken');
            return null;
          }
          throw new Error("Failed to fetch user");
        }
        
        return res.json() as Promise<User>;
      },
      retry: false,
    });
  
    const loginMutation = useMutation({
      mutationFn: async (credentials: LoginUser) => {
        const res = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
  
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || "Login failed");
        }
  
        const data = await res.json();
        
        // Store token in localStorage
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
  
        return data.user;
      },
      onSuccess: (data) => {
        queryClient.setQueryData(["auth-user"], data);
      },
    });
  
    const registerMutation = useMutation({
      mutationFn: async (userData: Omit<User, "_id" | "isAdmin">) => {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });
  
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || "Registration failed");
        }
  
        const data = await res.json();
        
        // Store token in localStorage
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
  
        return data.user;
      },
      onSuccess: (data) => {
        queryClient.setQueryData(["auth-user"], data);
      },
    });
  
    const logoutMutation = useMutation({
      mutationFn: async () => {
        const res = await fetch("/api/logout", { method: "POST" });
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || "Logout failed");
        }
        
        // Remove token from localStorage
        localStorage.removeItem('authToken');
        
        return res.json();
      },
      onSuccess: () => {
        queryClient.setQueryData(["auth-user"], null);
      },
    });
  
    useEffect(() => {
      if (isSuccess) {
        setIsLoading(false);
      }
    }, [isSuccess]);
  
    return (
      <AuthContext.Provider
        value={{
          user,
          isLoading,
          loginMutation,
          registerMutation,
          logoutMutation,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
  
  export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  }
  
  function useLoginMutation() {
    return useMutation({
      mutationFn: async (credentials: LoginUser) => {
        const res = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
  
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || "Login failed");
        }
  
        const data = await res.json();
        
        // Store token in localStorage
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
  
        return data.user;
      },
    });
  }
  
  function useRegisterMutation() {
    return useMutation({
      mutationFn: async (userData: Omit<User, "_id" | "isAdmin">) => {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });
  
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || "Registration failed");
        }
  
        const data = await res.json();
        
        // Store token in localStorage
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
  
        return data.user;
      },
    });
  }
  
  function useLogoutMutation() {
    return useMutation({
      mutationFn: async () => {
        const res = await fetch("/api/logout", { method: "POST" });
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || "Logout failed");
        }
        
        // Remove token from localStorage
        localStorage.removeItem('authToken');
        
        return res.json();
      },
    });
  }
  