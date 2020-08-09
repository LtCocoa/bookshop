<template>
  <div class="cart-item-card">
    <div class="cart-item-image-wrapper">
      <img :src="item.imageUrl" alt class="cart-item-image" />
    </div>
    <div class="cart-item-info">
      <div class="cart-item-name">{{item.title}}</div>
      <div>{{item.author}}</div>
      <div class="cart-item-price">{{item.price}}</div>
      <div>{{itemQuantity}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters("cart", {
      getQuantity: "getQuantityById",
    }),
    itemQuantity() {
      return this.getQuantity(this.item.id);
    },
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
  padding: 10px;
  background-color: rgb(243, 243, 243);
  margin: 10px 0;
  border-radius: 10px;
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
</style>