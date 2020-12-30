<template>
  <div>
    <div
      class="user-container"
      v-if="showUsers"
    >
      <div
        class="user-card"
        v-for="user in users"
        :key="user.id"
        @click="onUserCardClick(user)"
      >
        <div>{{ user.username }}</div>
        <div>{{ user.email }}</div>
      </div>
    </div>
    <div v-else>
      <user-posts
        :user="selectedUser"
        @close-user-posts="showUsers = true"
      ></user-posts>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import UserPosts from "../components/UserPosts";

export default {
  components: {
    UserPosts
  },
  data() {
    return {
      showUsers: true,
      selectedUser: null
    }
  },
  apollo: {
    users: {
      query: gql`query {
        users {
          id
          username
          email
        }
      }`,
    }
  },
  created() {
    this.$apollo.queries.users.refetch();
  },
  methods: {
    onUserCardClick(user) {
      this.showUsers = false;
      this.selectedUser = user;
    }
  }
}
</script>

<style scoped>
  .user-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-card {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    height: 100px;
    margin: 0 10px;
    width: 300px;
    border: 1px solid rgb(151, 151, 151);
    border-radius: 10px;
    box-shadow: 0px 1px 5px 1px rgb(136, 136, 136);
  }
</style>