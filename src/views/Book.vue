<template>
  <div>
    <div class="book-container">
      <div class="book-image-wrapper">
        <img :src="book.imageUrl" alt="book cover" />
      </div>
      <div>
        <h2>{{ book.author }}</h2>
        <div>{{ book.title }}</div>
      </div>
    </div>
    <button class="button" @click.stop="onClick">Add to Cart</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "book",
  props: {
    bookId: {
      type: Number,
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
        type: "error",
        message: `Could not find book with id ${this.bookId}.`,
      });
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapState({
      books: (state) => state.books.all,
    }),
  },
  methods: {
    ...mapActions("notifications", ["addNotification"]),
    ...mapActions("cart", ["addProductToCart"]),
    onClick() {
      this.addProductToCart(this.book);
    },
  },
};
</script>

<style>
.button {
  margin: 5px 0;
}

.book-container {
  display: flex;
  padding: 10px;
}

.book-image-wrapper {
  height: 400px;
  margin: 0 10px;
}

.book-image-wrapper img {
  height: 100%;
}
</style>