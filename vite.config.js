
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_DOMAIN,
          changeOrigin: true,
          secure: false,
        },
      },
      port: env.VITE_PORT
    },
    build: {
      minify: true,
      sourcemap: false,
      cssMinify: true,
    },
    preview: {
      port: 3000,
    },
  };
});

// import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     plugins: [react()],
//     server: {
//       proxy: {
//         "/api": {
//           target: env.VITE_DOMAIN,
//           changeOrigin: true,
//           secure: false,
//         },
//       },
//       port: env.VITE_PORT
//     },
//   };
// });