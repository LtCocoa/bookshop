<template>
  <div class="book-card border-indigo-700" @click="onBookCardClick">
    <div class="book-card__image-wrapper">
      <img
        :src="book.imageUrl"
        alt="book cover"
        class="book-card__book-image"
      />
    </div>
    <div class="book-info">
      <rating 
        :current="book.rating"
      />
      <div class="book-author">{{ book.author }}</div>
      <div class="book-title text-medium">{{ book.title }}</div>
      <div class="book-card-footer">
        <span class="price-tag">{{ book.price }}</span>
        <button class="button" @click.stop="onClick">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Rating from '@/components/Rating';

export default {
  name: 'book-card',
  components: {
    Rating
  },
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
  width: 220px;
  padding: 15px;
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
  margin: 5px;
}

.book-title {
  height: 52px;
  margin: 5px 0 25px;
  line-height: 1.6rem;
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

.price-tag {
  color: rgb(27, 5, 5);
  font-size: 19px;
  flex: 1;
  display: inline-flex;
  align-items: center;
}

.price-tag::before {
  content: "$";
}
</style>
