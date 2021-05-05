<template>
  <div class="book-card" @click="onBookCardClick">
    <div class="book-card__image-wrapper">
      <img
        :src="book.imageUrl"
        alt="book cover"
        class="book-card__book-image"
      />
    </div>
    <div class="book-info">
      <div class="book-author">{{ book.author }}</div>
      <div class="book-title">{{ book.title }}</div>
      <div class="book-card-footer">
        <span class="price">{{ book.price }}</span>
        <button class="button" @click.stop="onClick">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'book-card',
  props: {
    book: {
      type: Object,
    },
  },
  methods: {
    ...mapActions('cart', ['addProductToCart']),
    onClick() {
      this.addProductToCart(this.book);
    },
    onBookCardClick() {
      this.$router.push({ name: 'Book', params: { bookId: this.book.id } });
    },
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

.book-card:hover .book-card__book-image {
  transform: scale(1.07);
}

.book-card__image-wrapper {
  height: 250px;
  margin: 10px 0;
}

.book-card__book-image {
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

.book-card-footer {
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
</style>
