"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      forcedTheme="dark"      // ✅ ALWAYS dark
      enableSystem={false}    // ✅ ignore OS theme
    >
      {children}
    </ThemeProvider>
  );
}
