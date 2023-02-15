<template>
  <button class="btn" @click="deleting">
    <span>Delete</span>
  </button>
</template>
<script>
export default {
  emits: ["deleting"],
  methods: {
    deleting() {
      this.$emit("deleting");
    },
  },
};
</script>
<style scoped>
.btn {
  display: flex;
  align-items: center;
  background: none;
  border: 1px solid #bdbdbd;
  height: 48px;
  padding: 0 24px 0 24px;
  letter-spacing: 0.25px;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.2s;
}
.btn:focus {
  outline: none;
}

.btn {
  font-size: 16px;
  color: red;
}
.btn:hover {
  background-color: #fff5f5;
}
.btn:active {
  box-shadow: 0 0 0 4px #ffcccc;
}
</style>