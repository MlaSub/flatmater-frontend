<template>
  <div class="backgroud" @click="closing"></div>
  <base-card class="searching-form">
    <div class="nav">
      <the-page-navigation
        :toggleGroups="false"
        @searched="allMembers"
      ></the-page-navigation>
    </div>
    <div class="search-window">
      <one-member
        v-for="member in memberUsers"
        :key="member.id"
        :id="member.id"
        :name="member.name"
        :surname="member.surname"
        :member="member.member"
      ></one-member>
    </div>
    <button class="cancel btn" @click="closing">Close</button>
  </base-card>
</template>
<script>
import BaseCard from "../UI/BaseCard.vue";
import OneMember from "./OneMember.vue";
import ThePageNavigation from "../layout/ThePageNavigation.vue";
export default {
  components: { BaseCard, OneMember, ThePageNavigation },
  emits: ["closing"],
  computed: {
    memberUsers() {
      return this.$store.getters["members/allMembers"];
    },
  },
  methods: {
    async allMembers(search) {
      let data = {};
      if (search != null) {
        data = {
          group: this.$route.params.id,
          search: search,
        };
      } else {
        data = {
          group: this.$route.params.id,
          search: null,
        };
      }
      await this.$store.dispatch("members/getAllMembers", data);
    },
    closing() {
      this.$emit("closing");
    },
  },
  mounted() {
    this.allMembers();
  },
};
</script>
<style scoped>
.backgroud {
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.searching-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: white;
  border: 1px solid #3a0061;
  width: 80%;
  height: 90%;
}
.nav {
  margin-bottom: 10px;
}
form {
  border-bottom: 1px solid black;
  box-shadow: 0 4px 6px -6px #222;
  margin-bottom: 5px;
  padding-bottom: 10px;
  width: 100%;
}
.cancel {
  position: fixed;
  bottom: 5%;
  right: 5%;
}
.search-window {
  width: 100%;
  height: 80%;
  overflow: auto;
}

.btn {
  border: 1px solid #3a0061;
  height: 28px;
  padding: 0 14px 0 14px;
  letter-spacing: 0.25px;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.1s;
  font-size: 16px;
  color: #3a0061;
}
.btn:focus {
  outline: none;
}
.btn:hover {
  background-color: #3a0061;
  color: white;
}
.btn:active {
  box-shadow: 0 0 0 4px #edd2ff;
  color: white;
}
.search {
  font-family: inherit;
  width: 50%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: rgb(0, 0, 0);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
</style>