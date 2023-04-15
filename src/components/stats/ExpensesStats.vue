<template>
  <base-card>
    <p>
      Total amount of all expenses: {{ statsOverview.total_group_expense }} €
    </p>
    <p>Total you paid for: {{ statsOverview.total_personal_expense }} €</p>
    <p>
      How much did you spend: {{ statsOverview.pesronal_total_expense_share }} €
    </p>
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