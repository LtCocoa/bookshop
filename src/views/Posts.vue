<template>
  <div class="user-post__container">
    <div>
      <div
        v-for="post in posts"
        :key="post.id"
        class="user-post__content"
      >
        <div class="user-post__header">
          <div class="user-post__title">{{ post.title }}</div>
          <div class="user-post__author">by {{ post.author.username }}</div>
        </div>
        <div
          class="user-post__delete-button"
          @click="deletePost(post.id)"
        >✖</div>
        <p class="user-post__text">{{ post.text }}</p>
      </div>
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
  created() {
    this.$apollo.queries.posts.refetch();
  },
  methods: {
    deletePost(id) {
      this.$apollo.mutate({
        mutation: gql`mutation ($postId: Float!) {
          deletePost(id: $postId)
        }`,
        variables: {
          postId: id
        }
      })
      .then(this.$apollo.queries.posts.refetch());
    }
  },
  apollo: {
    posts: {
      query: gql`query {
        posts {
          id
          title
          text
          author {
            username
            email
          }
        }
      }`
    },
  },
};
</script>

<style scoped>
  .user-post__content {
    background-color: rgb(255, 232, 232);
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px;
    position: relative;
  }

  .user-post__header {
    display: flex;
    align-items: center;
  }

  .user-post__title {
    padding: 5px;
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;
  }

  .user-post__author {
    font-style: italic;
  }

  .user-post__delete-button {
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 5px;
    cursor: pointer;
  }

  .user-post__text {
    padding: 5px 15px 5px;
  }
</style>