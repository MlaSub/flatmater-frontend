<template>
  <header>
    <nav>
      <ul>
        <li v-if="!isLoggedIn"><router-link to="/">Loging</router-link></li>
        <li v-if="!isLoggedIn">
          <router-link to="/registration">Registration</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/grouplist">Groups</router-link>
        </li>
        <li v-if="isLoggedIn"><button @click="logOut">Log out</button></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters["currentUserIsAuthenticated"];
    },
  },
  methods: {
    async logOut() {
      await this.$store.dispatch("logOutUser");
      this.$router.replace("/");
    },
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
  margin-bottom: 1rem;
  margin-top: 0px;
}
nav {
  height: 100%;
}
ul {
  list-style: none;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
}
li {
  margin: 0 2rem;
}
a,
button {
  text-decoration: none;
  color: white;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>