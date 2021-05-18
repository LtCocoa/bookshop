<template>
  <div class="book-container" v-if="book">
    <div class="book-image-wrapper">
      <img :src="book.imageUrl" alt="book cover" />
    </div>
    <div class="book-info">
      <div class="text-3xl">{{ book.title }}</div>
      <div>by {{ book.author }}</div>
      <p class="book-description">{{ book.description }}</p>
      <button class="button" @click.stop="onClick">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'book',
  props: {
    bookId: {
      type: [Number, String],
      default: null,
      required: true,
      validator: (id) => id >= 0,
    },
  },
  data() {
    return {
      book: null,
    };
  },
  created() {
    this.book = this.books.find((item) => item.id === this.bookId);

    if (!this.book) {
      this.addNotification({
        type: 'error',
        message: `Could not find book with id ${this.bookId}.`,
      });
      this.$router.push({ name: 'Books' });
    }
  },
  computed: {
    ...mapState({
      books: (state) => state.books.all,
    }),
    changeBook() {
      return this.book;
    }
  },
  methods: {
    ...mapActions('notifications', ['addNotification']),
    ...mapActions('cart', ['addProductToCart']),
    onClick() {
      this.addProductToCart(this.book);
    },
  },
};
</script>

<style scoped>
.book-container {
  display: flex;
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
}

.book-image-wrapper {
  height: 400px;
  margin: 0 10px;
}

.book-image-wrapper img {
  height: 100%;
}

.book-info {
  padding: 10px;
}

.button {
  margin: 5px 0;
}

.book-author {
  font-size: 27px;
  font-weight: 400;
  line-height: 38px;
}

.book-description {
  white-space: pre-line;
}
</style>
