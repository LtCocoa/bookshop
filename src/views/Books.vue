<template>
  <transition-group name="fade" tag="div" class="books-container">
    <book-card v-for="(book, index) in books" :key="index" :book="book"></book-card>
  </transition-group>
</template>

<script>
import { mapState } from "vuex";
import BookCard from "@/components/BookCard";

export default {
  components: {
    BookCard,
  },
  computed: mapState({
    books: (state) => state.books.all,
  }),
  created() {
    // console.log(this.books);
  },
};
</script>

<style scoped>
.books-container {
  display: flex;
  flex-wrap: wrap;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>