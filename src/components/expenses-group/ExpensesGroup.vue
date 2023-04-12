<template>
  <base-card class="expense-group">
    <div>
      <h2>{{ groupName }}</h2>
      <base-button mode="outline" link :to="expensesGroupURL"
        >View group expenses</base-button
      >
      <p>Total amount: {{ totalAmountCom }} €</p>
    </div>
    <div class="options">
      <delete-button @deleting="deletingGroup"></delete-button>
    </div>
  </base-card>
</template>
<script>
import BaseCard from "../UI/BaseCard.vue";
import BaseButton from "../UI/BaseButton.vue";
import DeleteButton from "../UI/DeleteButton.vue";
export default {
  components: { BaseCard, BaseButton, DeleteButton },
  props: ["expensesGroupTitle", "id", "totalAmount"],
  emits: ["moreOptionsClickG"],
  computed: {
    groupName() {
      return this.expensesGroupTitle;
    },
    expensesGroupURL() {
      return "/group/" + this.id;
    },
    totalAmountCom() {
      return this.totalAmount;
    },
  },
  methods: {
    deletingGroup() {
      return this.$store.dispatch("groups/deleteGroup", this.id);
    },
    moreOptionsClickG() {
      const data = { group: this.id, seach: null };
      this.$emit("moreOptionsClick", data);
    },
  },
};
</script>
<style scoped>
.expense-group {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* padding: 1.5rem; */
}
h2 {
  font: 20px;
}
.options {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
}
</style>