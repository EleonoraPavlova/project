
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/base.css";
import "./assets/normalize.css";
import "./assets/mixins.scss";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import directives from './directives';


const app = createApp(App)
directives.forEach(directive => {
    app.directive(directive.name, directive)
})



createApp(App).use(store).use(router).use(ToastPlugin).mount("#app");
