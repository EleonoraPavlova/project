import axios from "axios";

export default {
  namespaced: true,
  state: {
    list: [],
    isLoadingList: false
  },
  mutations: {
    getListStarted(state) {
      state.isLoadingList = true
    },
    getListFinished(state, arr) {
      state.isLoadingList = false
      state.list = arr;
    },
    getListFailed(state) {
      state.isLoadingList = false
      state.list = []
    },
    itemDeleted(state, id) {
      const index = state.list.findIndex((item) => item.id === id)
      state.list.splice(index, 1)
    },
    itemCreated(state, entity) {
      state.list.push(entity)
    },
    itemEdited(state, payload) {
      const index = state.list.findIndex((item) => item.id === payload.id)
      // нашли индекс элемента редаг, потом в массив по этому индексу ложим это значение и + новые все поля и новые значения!
      state.list[index] = { ...state.list[index], ...payload }
    }
  },
  actions: {
    async getList({ commit }) {
      commit("getListStarted")
      try {
        const { data } = await axios.get(
          "https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/resume.json"
        );

        const items = Object.entries(data).map(([key, value]) => {
          return {
            id: key,
            ...value,
          };
        });
        commit("getListFinished", items)
      } catch (e) {
        commit("getListFailed")
        throw e;
      }
    },
    async deleteItem({ commit }, id) {
      try {
        await axios.delete(
          `https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/resume/${id}.json`
        );
        commit("itemDeleted", id)
      } catch (e) {
        console.log(e)
        throw (e)
      }
    },
    async createItem({ commit }, payload) {
      try {
        const { data } = await axios.post(
          "https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/resume.json", payload
        );

        commit("itemCreated", { ...payload, id: data.name })
      } catch (e) {
        console.log(e)
        throw (e)
      }
    },
    async editItem({ commit }, payload) {
      const { id, ...rest } = payload
      try {
        await axios.patch(
          `https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/resume/${id}.json`, rest
        );
        commit("itemEdited", payload)
      } catch (e) {
        console.log(e)
        throw (e)
      }
    }
  }
};