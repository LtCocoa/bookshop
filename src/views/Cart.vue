<template>
  <div class="cart-container">
    <div class="cart-items-wrapper">
      <div v-if="isCartEmpty">cart empty</div>
      <transition-group name="fade" tag="div" v-else>
        <cart-item-card
          v-for="item in cart"
          :key="item.product.id"
          :item="item.product"
        ></cart-item-card>
      </transition-group>
    </div>
    <div class="checkout-wrapper">
      <span>Total: </span>
      <span>{{ totalPrice | fixedNum }}</span>
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
  filters: {
    fixedNum(value) {
      return value.toFixed(2);
    },
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart.items,
    }),
    ...mapGetters("cart", ["totalPrice", "getItemsAmount"]),
    isCartEmpty() {
      return this.getItemsAmount === 0;
    },
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
  flex: 1;
  position: sticky;
  align-self: flex-start;
  top: 20px;
  padding: 15px;
  font-size: 25px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-move {
  transition: transform 1s;
}
</style>