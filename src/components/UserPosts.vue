<template>
  <div class="user-posts__container" @click="$emit('close-user-posts')">
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "user-posts",
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  apollo: {
    posts: {
      query: gql`query postsByAuthorId($userId: Int!) {
        postsByAuthorId(authorId: $userId) {
          id
          title
          text
        }
      }`,
      variables() {
        return {
          userId: this.user.id
        }
      },
      update: data => data.postsByAuthorId
    },
  },
};
</script>

<style>
</style>