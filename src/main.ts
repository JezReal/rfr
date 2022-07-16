import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/router";
import "./index.css";
import VWave from "v-wave";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(VWave, {
  color: "gray",
  startingOpacity: 0.5,
  easing: "ease-in",
  duration: 0.2,
});

app.mount("#app");
