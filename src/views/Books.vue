<template>
  <transition-group name="fade" tag="div" class="books-container">
    <book-card
      v-for="(book, index) in books"
      test="123"
      style="d"
      :key="index"
      :book="book"
    ></book-card>
  </transition-group>
</template>

<script>
import { mapState } from "vuex";
import BookCard from "@/components/BookCard";

export default {
  components: {
    BookCard,
  },
  computed: {
    ...mapState({
      books: (state) => state.books.all,
    })
  },
  methods: {
    
  },
  created() {
    const obj = {};
    Object.defineProperty(obj, 'data', {
      get() {
        console.log('getter');
        return 1;
      },
      set(newValue) {
        console.log('setter ', newValue);
      }
    });
    console.log(obj.data);
    obj.data = 2;
  },
};
</script>

<style scoped>
.books-container {
  width: 1150px;
  margin: 0 auto;
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