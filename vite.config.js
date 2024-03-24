import { defineConfig } from "vite";

/**
 * Path to exercise folder
 */
const exercisePath = "BestShop/01_Dzien_1/01_Podstawy/01_Pierwsze_kroki_z_BestShop";

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  server: {
    port: 3000,
  },
});
