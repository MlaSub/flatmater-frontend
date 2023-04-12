<template>
  <div class="navigation">
    <div class="search">
      <input
        v-model="searchParam"
        type="input"
        class="form__field"
        placeholder="Search"
        name="search"
        id="name"
        required
      />
      <button @click="searched">Search</button>
    </div>
    <button @click="addNewToggle" v-if="addNewButton">Add new</button>
    <button @click="addNewFriends" v-if="addFriends">Add friends</button>

    <div class="panel-body" v-if="toggleGroups">
      <label class="switch">
        <input type="checkbox" @click="toggleCheckbox" />
        <div class="slider round"></div>
      </label>
      <p>{{ checkbox ? "all groups" : "my groups" }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["toggleGroups", "addNewButton", "addFriends"],
  emits: ["searched", "add-new-toggle", "add-friends"],
  data() {
    return {
      searchParam: null,
      showGroups: "member",
      checkbox: true,
    };
  },
  // computed: {
  //   show,
  // },
  methods: {
    searched() {
      // if (this.checkbox == true) {
      //   data = {
      //     search: this.searchParam,
      //     mode: "all",
      //   };
      // } else {
      //   data = {
      //     search: this.searchParam,
      //     mode: "my",
      //   };
      // }
      // print(data);
      this.$emit("searched", this.searchParam);
    },
    addNewToggle() {
      this.$emit("add-new-toggle");
    },
    toggleCheckbox() {
      this.checkbox = !this.checkbox;
    },
    addNewFriends() {
      this.$emit("add-friends");
    },
  },
};
</script>
<style scoped>
.navigation {
  margin: auto;
  display: flex;
  justify-content: center;
  /* gap: 1rem; */
  align-items: baseline;
  align-content: stretch;
}
button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
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
.form__field {
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
.form__field::placeholder {
  color: transparent;
}
.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}
.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #3a0061, #edd2ff);
  border-image-slice: 1;
}
.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #000000;
  font-weight: 700;
}

/* reset input */
.form__field:required,
.form__field:invalid {
  box-shadow: none;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #101010;
}

input:focus + .slider {
  box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
p {
  padding: 0px;
  margin: 0px;
}
.panel-body {
  width: 6%;
}
</style>