import { createApp as createClientApp } from "vue";
import { createPinia } from "pinia";
import { createRouter } from "./router";
import App from "./App.vue";

import "bootstrap";

// styles
import "./assets/sass/main.scss";
import "toastify-js/src/toastify.css";

export type AppContext = Awaited<ReturnType<typeof createApp>>;
export type Plugin = (clientApp: AppContext) => void | Promise<void>;

const plugins = import.meta.glob<{ default: Plugin }>("./plugins/*.ts", {
  eager: true,
});

// this is a helper function to define plugins with autocompletion
export function definePlugin(plugin: Plugin) {
  return plugin;
}

export async function createApp() {
  const app = createClientApp(App);
  const router = createRouter();

  const pinia = createPinia();
  app.use(pinia);

  const clientApp = {
    app,
    router,
    pinia,
  };

  app.provide("clientApp", clientApp);

  for (const path in plugins) {
    try {
      const { default: plugin } = plugins[path];
      await plugin(clientApp);
    } catch (error) {
      console.error(`Error while loading plugin "${path}".`);
      console.error(error);
    }
  }

  // use router after plugin registration, so we can register navigation guards
  app.use(clientApp.router);

  return clientApp;
}
