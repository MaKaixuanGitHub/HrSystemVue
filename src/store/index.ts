import { createStore } from 'vuex';

interface State {
  showMenu: boolean;
}

export default createStore<State>({
  state: {
    showMenu: true
  },
  mutations: {
    setShowMenu(state, show: boolean) {
      state.showMenu = show;
    }
  }
});