const state = () => ({
  all: [],
  areLoaded: false,
});

const getters = {
  getBookById(id) {
    return state.books.find(item => item.id === id);
  }
};

const mutations = {
  setBooks(state, products) {
    state.all = products;
    state.areLoaded = true;
  },
};

const actions = {
  loadBooks({ commit }, products) {
    commit("setBooks", products);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
