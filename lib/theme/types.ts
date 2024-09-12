export type Theme = "dark" | "light";

export interface ThemeContextValues {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
