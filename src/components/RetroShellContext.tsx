import { createContext, useContext } from 'react';

const RetroShellContext = createContext(false);

export function RetroShellProvider({ children }: { children: React.ReactNode }) {
  return <RetroShellContext.Provider value={true}>{children}</RetroShellContext.Provider>;
}

export function useRetroShell() {
  return useContext(RetroShellContext);
}
