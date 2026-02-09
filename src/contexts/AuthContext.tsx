// Frontend-only mock auth – no backend. Replace with real auth later.
import React, { createContext, useContext, useState, useCallback } from 'react';

export interface MockUser {
  id: string;
  email: string;
  full_name?: string;
  market?: string;
  role?: string;
}

interface AuthContextType {
  user: MockUser | null;
  loading: boolean;
  signOut: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string, market: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<MockUser | null>(() => {
    try {
      const stored = sessionStorage.getItem('agri-mock-user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [loading] = useState(false);

  const signIn = useCallback(async (email: string, _password: string) => {
    const mockUser: MockUser = {
      id: `mock-${Date.now()}`,
      email,
      full_name: email.split('@')[0],
      market: 'Central Market',
    };
    setUser(mockUser);
    sessionStorage.setItem('agri-mock-user', JSON.stringify(mockUser));
  }, []);

  const signUp = useCallback(
    async (email: string, _password: string, fullName: string, market: string) => {
      const mockUser: MockUser = {
        id: `mock-${Date.now()}`,
        email,
        full_name: fullName,
        market,
      };
      setUser(mockUser);
      sessionStorage.setItem('agri-mock-user', JSON.stringify(mockUser));
    },
    []
  );

  const signOut = useCallback(async () => {
    setUser(null);
    sessionStorage.removeItem('agri-mock-user');
  }, []);

  const value: AuthContextType = {
    user,
    loading,
    signOut,
    signIn,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
