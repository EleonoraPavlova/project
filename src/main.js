
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/base.css";
import "./assets/normalize.css";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";



createApp(App).use(store).use(router).use(ToastPlugin).mount("#app");
