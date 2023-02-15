<template>
  <base-card>
    <p>Total cost: {{ statsOverview.total_group_expense }} €</p>
    <p>Total personal cost: {{ statsOverview.total_personal_expense }} €</p>
  </base-card>
</template>
<script>
import BaseCard from "../UI/BaseCard.vue";
export default {
  components: { BaseCard },
  computed: {
    statsOverview() {
      return this.$store.getters["expense/expensesStatsTotal"];
    },
  },
};
</script>