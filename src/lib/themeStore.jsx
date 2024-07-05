// import { create } from "zustand";

// const getInitialTheme = () => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem("theme") || "light";
//   }
//   return "light";
// };

// const useThemeStore = create((set) => ({
//   theme: getInitialTheme(),
//   toggleTheme: () =>
//     set((state) => {
//       const newTheme = state.theme === "light" ? "dark" : "light";
//       if (typeof window !== "undefined") {
//         localStorage.setItem("theme", newTheme);
//       }
//       return { theme: newTheme };
//     }),
//   // toggleTheme: () =>
//   //   set((state) => ({
//   //     theme: state.theme === "light" ? "dark" : "light",
//   //   })),
// }));

// export default useThemeStore;

import { create } from "zustand";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    return theme;
  }
  return "light";
};

const useThemeStore = create((set) => ({
  theme: getInitialTheme(),
  setTheme: (theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
    set({ theme });
  },
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      }
      return { theme: newTheme };
    }),
}));

export default useThemeStore;
