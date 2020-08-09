<template>
  <div class="cart-container">
    <div class="cart-items-wrapper">
      <cart-item-card v-for="item in cart" :key="item.product.id" :item="item.product"></cart-item-card>
    </div>
    <div class="checkout-wrapper">
      <span>{{totalPrice}}</span>
    </div>
  </div>
</template>

<script>
import CartItemCard from "@/components/CartItemCard";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    CartItemCard,
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart.items,
    }),
    ...mapGetters('cart', ["totalPrice"]),
  },
};
</script>

<style scoped>
.cart-container {
  display: flex;
  flex-direction: row;
}

.cart-items-wrapper {
  flex: 2;
}

.checkout-wrapper {
  position: sticky;
  align-self: flex-start;
  top: 20px;
  flex: 1;
}
</style>