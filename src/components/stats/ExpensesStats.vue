<template>
  <base-card>
    <p>
      Total amount of all expenses: {{ statsOverview.total_group_expense }} €
    </p>
    <p>Total you paid for: {{ statsOverview.total_personal_expense }} €</p>
    <p>
      How much did you spend: {{ statsOverview.pesronal_total_expense_share }} €
    </p>
    <button @click="seeDebtOverview">
      {{ debtOverview ? "Close overview" : "Debt overview" }}
    </button>
    <debt-distribution-overview
      v-if="debtOverview"
    ></debt-distribution-overview>
  </base-card>
</template>
<script>
import BaseCard from "../UI/BaseCard.vue";
import DebtDistributionOverview from "./DebtDistributionOverview.vue";
export default {
  components: { BaseCard, DebtDistributionOverview },
  data() {
    return {
      debtOverview: false,
    };
  },
  computed: {
    statsOverview() {
      return this.$store.getters["expense/expensesStatsTotal"];
    },
  },
  methods: {
    seeDebtOverview() {
      this.debtOverview = !this.debtOverview;
    },
  },
};
</script>
<style scoped>
button {
  margin: auto;
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
button:focus {
  outline: none;
}
button:hover {
  background: #3a0061;
  color: white;
}
button:active {
  box-shadow: 0 0 0 4px #edd2ff;
  color: white;
}
</style>