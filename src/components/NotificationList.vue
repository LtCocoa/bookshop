<template>
  <transition-group class="notifications-container" name="notif" tag="div">
    <notification
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    >
    </notification>
  </transition-group>
</template>

<script>
import { mapState } from "vuex";
import Notification from "./Notification";

export default {
  components: {
    Notification,
  },
  computed: {
    ...mapState({
      notifications: (state) => state.notifications.notifications,
    }),
  },
};
</script>

<style scoped>
.notifications-container {
  position: fixed;
  bottom: 25px;
  right: 5%;
  width: 350px;
}

.notif-move {
  transition: 0.3s ease-out;
}
</style>