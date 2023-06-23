/**
 * This is your client vue app entrypoint
 * Its loaded because it is referenced in the vite
 * entrypoint file (index.html located at the root of this project)
 *
 * External css/js files will be loaded as dependencies.
 * You may want to check the vite configuration.
 * Some plugins will register virtual components or lazyload other for us.
 *
 * @see /index.html
 * @see /vite.config.ts
 * @see /app.ts
 * @see /plugins/*.ts
 */

import { createApp } from "./main";

/**
 * We create our app and mount it when it is ready
 *
 * @see @/main.ts for more detailed informations
 */

createApp().then(async (vueApp) => {
  // wait for the app to be ready
  await vueApp.router.isReady();

  // finaly mount the app to the DOM
  vueApp.app.mount("#app");
});
