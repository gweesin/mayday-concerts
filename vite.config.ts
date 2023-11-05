import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.svg", "mask-icon.svg"],
      manifest: {
        name: "Mayday Concerts",
        short_name: "MC",
        description:
          "This App is created to provide an offline Progressive Web App (PWA) for viewing lyrics during Mayday concerts, to prevent difficulties in reading lyrics subtitles when the screen is too far away.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.svg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.svg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
