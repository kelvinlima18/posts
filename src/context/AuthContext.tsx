import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  username: string;
}

interface Credencials {
  username: string;
  password: string;
}

interface AuthContext {
  username: string;
  token: string;
  signIn(SignInCredencials: Credencials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@PostsSegware:token');
    const username = localStorage.getItem('@PostsSegware:user');

    if (token && username) {
      return { token, username };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('sign-in', {
      username,
      password,
    });

    const token = response.data;

    localStorage.setItem('@PostsSegware:token', token);
    localStorage.setItem('@PostsSegware:user', username);

    setData({ token, username });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@PostsSegware:token');
    localStorage.removeItem('@PostsSegware:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        username: data.username,
        token: data.token,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used withim an AuthProvider');
  }

  return context;
}
