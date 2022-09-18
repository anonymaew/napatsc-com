import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// injecting default layout
const defaultLayoutPlugin = () => {
  return (tree, file) => {
    file.data.astro.frontmatter.layout = "/src/layouts/main.astro";
  };
};

// https://astro.build/config
export default defineConfig({
  site: "https://napatsc.com",
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [defaultLayoutPlugin],
  },
});
