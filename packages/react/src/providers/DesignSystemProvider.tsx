import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface DesignSystemContextValue {
  brand: string;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const DesignSystemContext = createContext<DesignSystemContextValue | null>(null);

interface DesignSystemProviderProps {
  brand: string;
  defaultTheme?: Theme;
  children: React.ReactNode;
}

export function DesignSystemProvider({
  brand,
  defaultTheme = 'light',
  children,
}: DesignSystemProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-brand', brand);
  }, [brand]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <DesignSystemContext.Provider value={{ brand, theme, setTheme }}>
      {children}
    </DesignSystemContext.Provider>
  );
}

export function useDesignSystem(): DesignSystemContextValue {
  const context = useContext(DesignSystemContext);
  if (context === null) {
    throw new Error('useDesignSystem must be used within DesignSystemProvider');
  }
  return context;
}
