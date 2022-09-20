
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/base.css";
import "./assets/normalize.css";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import VFocus from "./directives/VFocus";

const app = createApp(App);
app.directive("focus", {
    mounted(el) {
        el.focus();
    },
});



createApp(App).use(store).use(router).use(ToastPlugin).use(VFocus).mount("#app");
