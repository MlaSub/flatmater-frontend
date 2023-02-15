<template>
  <base-card>
    <h3>Add a new group</h3>
    <form>
      <div class="adding-new-group">
        <input
          type="text"
          :class="fieldClassF"
          name="group-name"
          :placeholder="placeholderValue"
          v-model="title"
          required
        />
      </div>
      <button @click.prevent="addNewGroupToList">Add</button>
    </form>
  </base-card>
</template>
<script>
import BaseCard from "../UI/BaseCard.vue";
export default {
  components: { BaseCard },
  emits: ["add-new-group-to-list"],
  data() {
    return {
      title: "",
      fieldClass: "form__field",
      placeholderValue: "Group title",
    };
  },
  computed: {
    fieldClassF() {
      return this.fieldClass;
    },
  },
  methods: {
    async addNewGroupToList() {
      if (this.title === "") {
        this.fieldClass = "form__field_alt";
        this.placeholderValue = "Please, enter the group title.";
      } else {
        this.$emit("add-new-group-to-list");
        await this.$store.dispatch("groups/addNewGroup", this.title);
      }
    },
  },
};
</script>
<style scoped>
h3 {
  margin-top: 0px;
}
.adding-new-group {
  width: 85%;
  /* margin: auto; */
}
button {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  transition: all 0.2s;
}

button:hover,
button:active {
  background-color: #edd2ff;
  border-color: #270041;
  color: #270041;
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
button:active {
  transform: translateY(1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
form {
  display: flex;
  justify-content: space-between;
  /* gap: 1rem; */
  align-items: baseline;
  align-content: stretch;
}
.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1rem;
  color: rgb(0, 0, 0);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form__field::placeholder {
  color: #9b9b9b;
}
.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #9b9b9b, #edd2ff);
  border-image-slice: 1;
}
.form__field:required,
.form__field:invalid {
  box-shadow: none;
}
.form__field_alt {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #ff0000;
  outline: 0;
  font-size: 1rem;
  color: rgb(0, 0, 0);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form__field_alt::placeholder {
  color: #ff5252;
}
</style>