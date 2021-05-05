const state = () => ({
  notifications: [],
});

const getters = {};

const mutations = {
  pushNotification(state, notification) {
    state.notifications.push({
      ...notification,
      id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
    });
  },
  removeNotification(state, notificationToRemove) {
    state.notifications = state.notifications.filter((notification) => {
      return notificationToRemove.id !== notification.id;
    });
  },
};

const actions = {
  addNotification({ commit }, notification) {
    commit('pushNotification', notification);
  },
  removeNotification({ commit }, notification) {
    commit('removeNotification', notification);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
