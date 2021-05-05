<template>
  <div class="cart-item-card">
    <div class="cart-item-main">
      <div class="cart-item-image-wrapper">
        <img :src="item.imageUrl" alt class="cart-item-image" />
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">
          <slot :item="item"></slot>
        </div>
        <div>{{ item.author }}</div>
        <div class="cart-item-price">
          {{ item.price }}
        </div>
        <div>{{ itemQuantity }}</div>
      </div>
    </div>
    <button @click="removeFromCartById(item.id)" class="remove-item-button">
      <simple-svg
        :src="require('@/assets/svg/close.svg')"
        width="30px"
        height="30px"
      />
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters("cart", {
      getQuantity: "getItemQuantityById",
    }),
    itemQuantity() {
      return this.getQuantity(this.item.id);
    },
  },
  methods: {
    ...mapActions("cart", ["removeFromCartById"]),
  },
};
</script>

<style scoped>
.cart-item-card {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: rgb(243, 243, 243);
  margin: 10px 0;
  border-radius: 10px;
}

.cart-item-main {
  padding: 10px;
  display: flex;
  width: 100%;
  height: 100%;
}

.cart-item-image-wrapper {
  height: 90%;
  width: 30%;
  margin: 10px;
}

.cart-item-image {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.cart-item-info {
  padding: 10px;
  height: 100%;
  width: 100%;
}

.cart-item-name {
  font-size: 25px;
}

.remove-item-button {
  padding: 10px 20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: rgb(187, 187, 187);
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease-out;
  height: 100%;
  width: 100px;
}

.remove-item-button:hover {
  background-color: rgba(219, 44, 44, 0.884);
}
</style>