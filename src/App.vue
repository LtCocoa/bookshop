<template>
  <div id="app">
    <header class="header">
      <div class="header__top">
        <div class="logo-container">
          <router-link to="/">
            <simple-svg :src="require('@/assets/book.svg')" width="90px" height="90px" />
          </router-link>
        </div>
        <div class="search-container">
          <input type="text" class="search-bar" />
          <button class="search-button">
            <simple-svg :src="require('@/assets/search-solid.svg')" width="20px" height="20px" />
          </button>
        </div>
        <div class="actions-container">
          <router-link to="/auth" class="actions__link">profile</router-link>
          <router-link to="/cart" class="actions__link">cart</router-link>
        </div>
      </div>
      <div class="header__bottom">
        <nav class="menu">
          <router-link to="/books" class="menu__link">Books</router-link>
          <router-link to="/events" class="menu__link">Events</router-link>
          <router-link to="/sale" class="menu__link">Sale</router-link>
          <router-link to="/about" class="menu__link">About</router-link>
        </nav>
      </div>
    </header>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  methods: {
    loadProducts() {
      let books = require("../data/products.json")["books"];
      let halfBooks = books.filter((book) => {
        if (book.price > 13) {
          return Object.assign({}, book);
        }
      });

      this.$store.dispatch("loadBooks", halfBooks);

      setTimeout(() => {
        this.$store.dispatch("loadBooks", books);
      }, 5000);
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1400px;
  margin: 0 auto;
}

header {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1000;
}

.header__top {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.logo-container {
  padding: 10px;
  text-align: center;
  flex: 1;
}

.search-container {
  display: flex;
  flex: 3;
  width: 600px;
  height: 50px;
  flex-direction: row;
}

.search-bar {
  padding: 5px;
  width: 100%;
  height: 100%;
  font-size: 23px;
  border-radius: 3px;
  border: 1px solid rgb(156, 156, 156);
  border-right-width: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.search-button {
  border-radius: 0;
  border: 0;
  width: 100px;
  padding: 10px;
  background-color: rgb(255, 120, 120);
}

.actions-container {
  flex: 1;
}

.actions__link {
  text-decoration: none;
  margin: 0 10px;
  padding: 15px 25px;
  border-radius: 10px;
}

.actions__link:hover {
  background-color: rgb(255, 120, 120);
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.menu::after {
  content: "";
  height: 4px;
  width: 100%;
  position: absolute;
  bottom: 2px;
  background-color: rgb(255, 120, 120);
}

.menu__link {
  font-size: 27px;
  text-decoration: none;
  color: #666666;
  padding: 10px 20px 0px 20px;
  margin: 0 5px;
  height: 50px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: all 0.2s ease-out;
}

.menu__link:hover {
  color: #262627;
  background-color: rgb(255, 120, 120);
  transform: translateY(-5px);
}

.menu__link.router-link-active {
  color: #262627;
  background-color: rgb(255, 120, 120);
  transform: translateY(-5px);
}

.content {
  padding: 20px;
}

footer {
  height: 200px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
