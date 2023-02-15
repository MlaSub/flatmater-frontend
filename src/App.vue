<template>
  <the-navigation></the-navigation>
  <main>
    <!-- <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view> -->
    <router-view></router-view>
  </main>
</template>
<script>
import TheNavigation from "./components/layout/TheNavigation.vue";
export default {
  components: { TheNavigation },
  created() {
    this.$store.dispatch("autoLogIn");
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
  margin: 0px;
  padding: 0px;
}

body {
  margin: 0px;
  padding: 0px;
}
main {
  margin: 0px;
}
</style>