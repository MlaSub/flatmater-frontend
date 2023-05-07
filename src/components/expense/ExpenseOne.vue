<template>
  <li>
    <base-card class="base-card">
      <div>
        <h2>{{ expenseName }}</h2>
        <p>{{ expenseDescription }}</p>
        <p>Cost: {{ expenseAmount }} €</p>
      </div>
      <delete-button class="btn" @deleting="deletingExpense"></delete-button>
    </base-card>
  </li>
</template>
<script>
import BaseCard from "../UI/BaseCard.vue";
import DeleteButton from "../UI/DeleteButton.vue";
export default {
  props: ["id", "expenseAmount", "expenseName", "expenseDescription"],
  components: { BaseCard, DeleteButton },
  methods: {
    async deletingExpense() {
      window.setTimeout(() => {
        this.$store.dispatch("expense/expenseDebtors", this.$route.params.id),
          this.$store.dispatch("expense/expensesStats", this.$route.params.id);
      }, 200);
      await this.$store.dispatch("expense/deletingExpesne", this.id);
    },
  },
};
</script>
<style scoped>
.base-card {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
</style>