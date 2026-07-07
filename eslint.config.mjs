import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    rules: {
      // Prose-heavy site: apostrophes and quotes in copy are intentional.
      "react/no-unescaped-entities": "off",
    },
  },
]);
