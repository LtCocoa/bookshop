<template>
  <div>Book {{ bookId }} page</div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: 'book',
  props: {
    bookId: {
      type: Number,
      default: null,
      required: true,
      validator: id => id >= 0
    }
  },
  data() {
    return {
      book: null,
    }
  },
  created() {
    this.book = this.books.find(item => item.id === this.bookId);
    
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
  }
}
</script>

<style>

</style>