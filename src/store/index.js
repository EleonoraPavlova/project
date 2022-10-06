import { createStore } from "vuex";
import resumeItems from "./resumeItems";


export default createStore({
  state: {
    someProperty: "Andrii is very handsome"
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { resumeItems },
});
