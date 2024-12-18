import { createContext, useState } from 'react';
import { ColorSchemeName, useColorScheme as useColorSchemeDefault } from 'react-native';

type ColorSchemeContextType = {
    colorScheme: ColorSchemeName;
    toggleColorScheme: () => void;
};

const initialColorSchemeContext: ColorSchemeContextType = {
    colorScheme: 'light',
    toggleColorScheme: () => { },
};

export const ColorSchemeContext =
    createContext<ColorSchemeContextType>(initialColorSchemeContext);

export const useColorScheme = (): ColorSchemeContextType => {
    const colorSchemeDefault = useColorSchemeDefault();
    const [colorScheme, setColorScheme] = useState<ColorSchemeName>(colorSchemeDefault);
    const toggleColorScheme = () => setColorScheme(
        current => current === 'dark' ? 'light' : 'dark');
    return { colorScheme, toggleColorScheme };
};