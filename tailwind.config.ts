import { join } from "path";
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}"),
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["VT323"],
        mono: ["IBM Plex Mono"],
        serif: ["Metropolis"],
      },
    },
  },
  plugins: [
    typography,
    skeleton({
      themes: {
        preset: [
          {
            name: "skeleton",
            enhancements: true,
          },
        ],
      },
    }),
  ],
} satisfies Config;
