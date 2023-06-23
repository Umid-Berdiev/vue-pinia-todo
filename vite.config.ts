import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import IconResolver from "unplugin-icons/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  // Project root directory (where index.html is located).
  root: process.cwd(),

  // Base public path when served in development or production.
  // You also need to add this base like `history: createWebHistory('my-subdirectory')`
  // in ./src/router.ts
  // base: '/my-subdirectory/',
  base: "/",

  // Directory to serve as plain static assets.
  publicDir: "public",

  // Adjust console output verbosity.
  logLevel: "info",

  // development server configuration
  server: {
    // Vite 3 now defaults to 5173, but you can override it with the port option.
    port: 5174,
  },

  /**
   * By default, Vite will crawl your index.html to detect dependencies that
   * need to be pre-bundled. If build.rollupOptions.input is specified,
   * Vite will crawl those entry points instead.
   *
   * @see https://vitejs.dev/config/#optimizedeps-entries
   */
  optimizeDeps: {
    include: [
      "@iconify/iconify",
      "@vueuse/core",
      "axios",
      "dayjs",
      "notyf",
      "vue",
      "vue-i18n",
    ],
    disabled: false,
  },

  // Will be passed to @rollup/plugin-alias as its entries option.
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: `/src/`,
      },
    ],
  },

  plugins: [
    Vue(),

    /**
     * unplugin-vue-router plugin generate routes based on file system
     * allow to use typed routes and usage of defineLoader
     *
     * @see https://github.com/posva/unplugin-vue-router
     * @see https://github.com/vuejs/rfcs/blob/ad69da2aee9242ef88f036713db68f3ef274bb1b/active-rfcs/0000-router-use-loader.md
     */
    VueRouter({
      routesFolder: "src/pages",

      /**
       * Data Fetching is an experimental feature from vue & vue-router
       *
       * @see https://github.com/vuejs/rfcs/discussions/460
       * @see https://github.com/posva/unplugin-vue-router/tree/main/src/data-fetching
       */
      dataFetching: true,
    }),

    /**
     * unplugin-auto-import allow to automaticaly import modules/components
     *
     * @see https://github.com/antfu/unplugin-auto-import
     */
    AutoImport({
      dts: true,
      imports: ["vue", "@vueuse/core", VueRouterAutoImports],
    }),

    /**
     * unplugin-vue-components plugin is responsible of autoloading components
     * documentation and md file are loaded for elements and components sections
     *
     * @see https://github.com/antfu/unplugin-vue-components
     */
    Components({
      dirs: ["src/layouts", "src/components"],
      extensions: ["vue"],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [IconResolver()],
    }),

    Icons(),
  ],

  build: {
    // minify: "terser",
    // Do not warn about large chunks
    chunkSizeWarningLimit: Infinity,
    // Double the default size threshold for inlined assets
    // https://vitejs.dev/config/build-options.html#build-assetsinlinelimit
    assetsInlineLimit: 4096 * 2,
    commonjsOptions: { include: [] },
  },
});
