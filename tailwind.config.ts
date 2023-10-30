import { join } from "path";
import type { Config } from "tailwindcss";
import { skeleton } from "@skeletonlabs/tw-plugin";

const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}"),
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["VT323"],
      },
      colors: {
        one: "rgba(13, 19, 32, 1)",
        two: "rgba(8, 12, 21, 1)",
      },
    },
  },
  plugins: [skeleton],
} satisfies Config;

export default config;
