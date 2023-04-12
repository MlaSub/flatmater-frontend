<template>
  <button class="btn" @click="moreOptionsClick">
    <span>More</span>
  </button>
</template>
<script>
export default {
  emits: ["moreOptionsClick"],
  methods: {
    moreOptionsClick() {
      this.$emit("moreOptionsClick");
    },
  },
};
</script>
<style scoped>
.btn {
  display: flex;
  align-items: center;
  background: none;
  border: 1px solid #3a0061;
  height: 48px;
  padding: 0 24px 0 24px;
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
</style>