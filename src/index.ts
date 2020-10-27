import { createApp } from "vue";
import { createHead } from "./lib/Head";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const head = createHead();
app.use(head);
app.use(router);
app.mount("#app");

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept();
  // @ts-ignore
  import.meta.hot.dispose(() => {
    // @ts-ignore
    app.unmount();
  });
}
