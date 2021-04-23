<template>
  <div class="book-card" @click="onBookCardClick">
    <div class="book-image-wrapper">
      <img :src="book.imageUrl" alt="book cover" class="book-image" />
    </div>
    <div class="book-info">
      <div class="book-author">{{ book.author }}</div>
      <div class="book-title">{{ book.title }}</div>
      <div class="book-card-bottom">
        <span class="price">{{ book.price }}</span>
        <button class="cart-add" @click.stop="onClick">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'book-card',
  props: {
    book: {
      type: Object,
    },
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    onClick() {
      this.addProductToCart(this.book);
    },
    onBookCardClick() {
      this.$router.push({ name: 'Book', params: { bookId: this.book.id } });
    }
  },
};
</script>

<style scoped>
.book-card {
  width: 250px;
  padding: 15px;
  margin: 10px;
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.book-card:hover {
  box-shadow: 0px 0px 12px 0px rgb(187, 187, 187);
}

.book-card:hover .book-image {
  transform: scale(1.07);
}

.book-image-wrapper {
  height: 250px;
  margin: 10px 0;
}

.book-image {
  object-fit: contain;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-out;
}

.book-info {
  flex: 1;
  padding: 5px;
}

.book-title {
  font-size: 19px;
  font-weight: 600;
  height: 52px;
  padding: 5px 0px 5px;
  margin-bottom: 5px;
  overflow: hidden;
  position: relative;
}

.book-author {
  font-size: 15px;
  padding: 5px 0px 0px 1px;
  overflow: hidden;
}

.book-card-bottom {
  display: flex;
}

.price {
  color: rgb(27, 5, 5);
  font-size: 19px;
  flex: 1;
}

.price::before {
  content: "$";
}

.cart-add {
  flex: 1;
  height: 30px;
  border: 0;
  border-radius: 5px;
  background-color: rgb(175, 194, 255);
  color: rgb(240, 240, 240);
  cursor: pointer;
  transition: all 0.5s ease-out;
  font-size: 17px;
}

.cart-add:hover {
  background-color: rgb(36, 87, 255);
  box-shadow: 0px 0px 15px 0px rgb(167, 167, 167);
}
</style>