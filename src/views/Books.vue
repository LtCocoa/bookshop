<template>
  <transition-group name="fade" tag="div" class="books-container">
    <book-card
      v-for="book in books"
      test="123"
      style="d"
      :key="book.id"
      :book="book"
    ></book-card>
  </transition-group>
</template>

<script>
import { mapState } from 'vuex';
import BookCard from '@/components/BookCard';

export default {
  components: {
    BookCard,
  },
  computed: {
    ...mapState({
      books: (state) => state.books.all,
    }),
  },
};
</script>

<style scoped>
.books-container {
  width: 1180px;
  margin: 0 auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, 220px);
  justify-items: center;
}

.books-container::after {
  content: '';
  flex: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
