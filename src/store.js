import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topListItem: null
  },
  mutations: {
    setTopLostItem(state, listItem) {
      state.topListItem = listItem;
    }
  }
});
