<template>
  <div class="alert-container" v-if="isVisible">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "default alert",
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.alert-container {
  position: absolute;
  height: 50px;
  bottom: 20px;
}
</style>