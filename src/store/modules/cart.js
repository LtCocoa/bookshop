const state = () => ({
  items: [],
});

const getters = {
  totalPrice: (state) => {
    return state.items.reduce((prev, curr) => {
      return prev + curr.product.price * curr.quantity;
    }, 0);
  },
  getItemQuantityById: (state) => (id) => {
    let i = state.items.find((item) => item.product.id === id);
    return i.quantity;
  },
  getItemsAmount: (state) => {
    return state.items.length;
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
  removeProductFromCart(state, id) {
    let product = state.items.find((item) => item.product.id === id);
    if (product) {
      state.items.splice(state.items.indexOf(product), 1);
    }
  },
};

const actions = {
  addProductToCart({ commit, dispatch }, product) {
    commit("pushToCart", { product: product });
    dispatch(
      "notifications/addNotification",
      {
        type: "success",
        message: "Product added to cart.",
      },
      { root: true }
    );
  },
  removeFromCartById({ commit, dispatch }, id) {
    commit("removeProductFromCart", id);
    dispatch(
      "notifications/addNotification",
      {
        type: "success",
        message: "Product removed from cart.",
      },
      { root: true }
    );
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
