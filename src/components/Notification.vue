<template>
  <div class="notification" :class="setNotificationClass">
    <div class="notification-status">
      <simple-svg :src="setNotificationType" width="25px" height="25px" />
    </div>
    <div class="notification-text">
      {{ notification.message }}
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import checkSVG from "@/assets/svg/check.svg";
import errorSVG from "@/assets/svg/error.svg";

export default {
  data() {
    return {
      success: {
        svg: checkSVG,
      },
      error: {
        svg: errorSVG,
      },
    };
  },
  props: {
    notification: {
      type: Object,
    },
  },
  computed: {
    setNotificationType() {
      return this[this.notification.type].svg;
    },
    setNotificationClass() {
      return `notification-${this.notification?.type}`;
    },
  },
  methods: {
    ...mapActions("notifications", ["removeNotification"]),
  },
  created() {
    setTimeout(() => {
      this.removeNotification(this.notification);
    }, 2000);
  },
};
</script>

<style scoped>
.notification {
  padding: 10px;
  margin: 5px 0;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  align-items: center;
  background-color: rgb(247, 237, 105);
  display: flex;
}

.notification-status {
  margin: 0 10px;
  display: flex;
  justify-content: center;
  width: 30px;
}

.notification-text {
  font-size: 19px;
  flex: 10;
}

.notification-success {
  background-color: rgb(76, 202, 87);
}

.notification-error {
  background-color: rgb(202, 76, 76);
}

.notif-enter-active,
.notif-leave-active {
  transition: opacity 0.4s;
}
.notif-enter, .notif-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
