<template>
  <div class="user-post__container">
    <div>
      <div v-for="post in posts" :key="post.id" class="user-post__content">
        <div class="user-post__header">
          <div class="user-post__title">{{ post.title }}</div>
          <div class="user-post__author">by {{ post.author.username }}</div>
        </div>
        <div class="user-post__delete-button" @click="deletePost(post.id)">
          ✖
        </div>
        <p class="user-post__text">{{ post.text }}</p>
      </div>

      <div class="send-post-container">
        <input
          type="text"
          class="send-post-container__input"
          v-model="postText"
        />
        <button class="send-post-container__submit" @click="createPost">
          Send
        </button>
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
  data() {
    return {
      postText: "",
    };
  },
  created() {
    this.$apollo.queries.posts.refetch();
  },
  methods: {
    createPost() {
      if (this.postText.length <= 0) {
        return;
      }
      const postText = this.postText;
      this.$apollo
        .mutate({
          mutation: gql`
            mutation post($input: PostInput!) {
              createPost(input: $input) {
                title
              }
            }
          `,
          variables: {
            input: {
              title: "new post",
              text: postText,
              authorId: 31,
            },
          },
        })
        .then(() => {
          this.$apollo.queries.posts.refetch();
          this.postText = "";
        });
    },
    deletePost(id) {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation deletePost($postId: Float!) {
              deletePost(id: $postId)
            }
          `,
          variables: {
            postId: id,
          },
        })
        .then(() => {
          this.$apollo.queries.posts.refetch();
        });
    },
  },
  apollo: {
    posts: {
      query: gql`
        query posts {
          posts {
            id
            title
            text
            author {
              username
              email
            }
          }
        }
      `,
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

.send-post-container {
  width: 100%;
  display: flex;
  margin-top: 20px;
}

.send-post-container__input {
  flex: 1;
  padding: 5px;
  font-size: 16px;
  margin-right: 25px;
  border: 0;
  border-bottom: 1px solid rgb(112, 112, 112);
}

.send-post-container__submit {
  width: 130px;
  height: 35px;
  font-size: 17px;
  color: rgb(59, 59, 59);
  background-color: rgb(255, 173, 173);
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.send-post-container__submit:hover {
  color: rgb(0, 0, 0);
  background-color: rgb(255, 120, 120);
}
</style>