import { createContext, useState, ReactNode } from 'react';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<null | any>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user,setUser] =useState(null)
    const signin = (newUser:any,cb: any) => {
        setUser(newUser);
        cb()
    }
    const signout = (cb:any) => {
        setUser(null);
        cb()
    }

    const value = {user, signin, signout}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};