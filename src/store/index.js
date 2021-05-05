import Vue from 'vue';
import Vuex from 'vuex';
import books from './modules/books';
import cart from './modules/cart';
import notifications from './modules/notifications';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    books,
    cart,
    notifications,
  },
});
