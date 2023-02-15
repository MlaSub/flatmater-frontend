<template>
  <base-card>
    <div class="loginform">
      <form @submit.prevent="loggingIn">
        <div>
          <label>Email</label>
          <input type="text" v-model="loginEmail" />
        </div>
        <div>
          <label>Password</label>
          <input type="text" v-model="loginPassword" />
          <button>Apply</button>
          <p v-if="successfullLogin">Successfully login!</p>
        </div>
      </form>
    </div>
  </base-card>
</template>
<script>
import BaseCard from "../UI/BaseCard.vue";
// import { mapGetters } from "vuex";
export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      successfullLogin: false,
    };
  },
  computed: {
    // ...mapGetters[
    //   ("currentUserID", "currentUserJWTt", "currentUserIsAuthenticated")
    // ],
    currentUserID() {
      return this.$store.getters["currentUserID"];
    },
    currentUserJWTt() {
      return this.$store.getters["currentUserJWTt"];
    },
    currentUserIsAuthenticated() {
      return this.$store.getters["currentUserIsAuthenticated"];
    },
  },
  methods: {
    async loggingIn() {
      const dataForm = {
        username: this.loginEmail,
        password: this.loginPassword,
      };
      try {
        await this.$store.dispatch("loginProcess", dataForm);
      } catch (error) {
        console.log(error);
      }
      console.log(
        // this.currentUserID,
        // this.currentUserJWTt,
        this.currentUserIsAuthenticated
      );
      this.$router.replace("/grouplist");
    },
  },
};
</script>
<style scoped>
.loginform {
  display: flex;
}
form,
p {
  margin: auto;
}
div {
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: baseline;
  align-content: stretch;
}
button {
  margin: 2px;
  font: inherit;
  cursor: pointer;
  background-color: gray;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  color: white;
}
button:hover,
button:active {
  border: 1px solid gray;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>