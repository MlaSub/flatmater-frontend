<template>
  <base-card>
    <div class="registrationform">
      <form @submit.prevent="toggleSuccess">
        <div>
          <label>Name</label>
          <input type="text" v-model="userName" required />
        </div>
        <div>
          <label>Surname</label>
          <input type="text" v-model="userSurname" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" v-model="userEmail" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" v-model="userPassword" required />
        </div>
        <button>Create profile</button>
      </form>
      <p v-if="successfullRegistrationUpdated">Successfully registered!</p>
    </div>
  </base-card>
</template>
<script>
import BaseCard from "../UI/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      successfullRegistration: false,
      userName: "",
      userSurname: "",
      userEmail: "",
      userPassword: "",
    };
  },
  computed: {
    successfullRegistrationUpdated() {
      return this.successfullRegistration;
    },
  },
  methods: {
    async toggleSuccess() {
      const data = {
        userName: this.userName,
        userSurname: this.userSurname,
        userPassword: this.userPassword,
        userEmail: this.userEmail,
      };
      await this.$store.dispatch("registration/registringUser", data);
      this.successfullRegistration = !this.successfullRegistration;

      (this.userName = ""),
        (this.userSurname = ""),
        (this.userEmail = ""),
        (this.userPassword = "");
      window.setTimeout(() => {
        return this.$router.replace("/");
      }, 500);
    },
  },
};
</script>
<style scoped>
.registrationform {
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