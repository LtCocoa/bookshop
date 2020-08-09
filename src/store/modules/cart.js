const state = () => ({
  items: [],
});

const getters = {
  totalPrice: (state) => {
    return state.items.reduce((prev, curr) => {
      return prev + curr.product.price * curr.quantity;
    }, 0);
  },
  getQuantityById: (state) => (id) => {
    let i = state.items.find((item) => item.product.id === id);
    return i.quantity;
  },
};

const mutations = {
  pushToCart(state, { product }) {
    let p = state.items.find((item) => {
      return item.product.id === product.id;
    });
    if (p) {
      p.quantity++;
    } else {
      state.items.push({
        product,
        quantity: 1,
      });
    }
  },
};

const actions = {
  addProductToCart({ commit }, product) {
    commit("pushToCart", { product: product });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
