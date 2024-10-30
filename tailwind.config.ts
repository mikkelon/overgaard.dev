import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        fantasque: ["Fantasque Sans Mono", "monospace"],
      },
    },
  },

  plugins: [],
} satisfies Config;
