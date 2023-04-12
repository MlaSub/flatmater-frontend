<template>
  <the-page-navigation
    :addNewButton="true"
    :addFriends="true"
    @add-new-toggle="toggleAddingNewExpesne"
    @searched="filteredExpensesList"
    @add-friends="closeMoreOptions"
  ></the-page-navigation>
  <add-expense
    v-if="addNewExpense"
    @add-new-expense-to-list="newExpenseAdded"
  ></add-expense>
  <expenses-stats></expenses-stats>
  <ul>
    <expense-one
      v-for="expense in filteredExpenses"
      :key="expense.id"
      :id="expense.id"
      :expenseAmount="expense.amount"
      :expenseDescription="expense.description"
      :expenseName="expense.name"
    ></expense-one>
  </ul>
  <member-search
    v-if="MemberSearchOn"
    @closing="closeMoreOptions"
  ></member-search>
</template>
<script>
import ExpenseOne from "../../components/expense/ExpenseOne.vue";
import ThePageNavigation from "../layout/ThePageNavigation.vue";
import AddExpense from "../expense/AddExpense.vue";
import ExpensesStats from "../stats/ExpensesStats.vue";
import MemberSearch from "../people/MemberSearch.vue";
import { mapActions } from "vuex";
export default {
  components: {
    ExpenseOne,
    ThePageNavigation,
    AddExpense,
    ExpensesStats,
    MemberSearch,
  },
  data() {
    return {
      addNewExpense: false,
      MemberSearchOn: false,
    };
  },
  computed: {
    filteredExpenses() {
      return this.$store.getters["expense/expense"];
    },
  },
  methods: {
    ...mapActions({ gettingExpenses: "expense/gettingExpenses" }),
    toggleAddingNewExpesne() {
      this.addNewExpense = !this.addNewExpense;
    },
    recalculation() {
      window.setTimeout(
        () =>
          this.$store.dispatch("expense/expensesStats", this.$route.params.id),
        200
      );
    },
    newExpenseAdded() {
      this.recalculation();
      this.addNewExpense = false;
    },
    async filteredExpensesList(searchParam) {
      const data = {
        id: this.$route.params.id,
        name: searchParam,
      };
      await this.$store.dispatch("expense/gettingExpenses", data);
    },
    closeMoreOptions() {
      this.MemberSearchOn = !this.MemberSearchOn;
    },
  },
  mounted() {
    this.gettingExpenses({ id: this.$route.params.id });
    this.$store.dispatch("expense/expensesStats", this.$route.params.id);
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  border: none;
}
</style>