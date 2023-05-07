<template>
  <div class="card">
    <div v-if="statsOverviewDebtors.length !== 0">
      <h4>People that owe you:</h4>
      <li v-for="debtor in statsOverviewDebtors" :key="debtor.id">
        {{ debtor.name }}: {{ debtor.amount }} €
      </li>
    </div>
    <div v-else-if="statsOverviewOwings.length !== 0">
      <h4>People that you owe to:</h4>
      <li v-for="owing in statsOverviewOwings" :key="owing.id">
        <span>{{ owing.name }}: {{ owing.amount }} €</span>
      </li>
    </div>
    <div v-else>
      <p>No money spent, man!</p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    statsOverviewDebtors() {
      return this.$store.getters["expense/currentExpenseStatsDebtors"];
    },
    statsOverviewOwings() {
      return this.$store.getters["expense/currentExpenseStatsOwings"];
    },
  },
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  padding: 1.5rem;
  margin: 1rem auto;
  max-width: 90%;
}
@media only screen and (max-width: 700px) {
  .base-card {
    max-width: 90%;
  }
}
li {
  list-style-type: none;
}
</style>