<template>
  <the-page-navigation
    @searched="searchGroups"
    @add-new-toggle="toggleAddingNewGroupd"
  ></the-page-navigation>
  <adding-expense-group
    v-if="addNew"
    @add-new-group-to-list="toggleAddingNewGroupClose"
  ></adding-expense-group>
  <expenses-group
    v-for="grupa in filteredExpensesGroup"
    :key="grupa.id"
    :id="grupa.id"
    :expensesGroupTitle="grupa.title"
    :totalAmount="grupa.total_amount"
  ></expenses-group>
</template>
<script>
import ThePageNavigation from "../layout/ThePageNavigation.vue";
import ExpensesGroup from "../../components/expenses-group/ExpensesGroup.vue";
import AddingExpenseGroup from "../expenses-group/AddingExpenseGroup.vue";

export default {
  components: {
    ExpensesGroup,
    ThePageNavigation,
    AddingExpenseGroup,
  },
  data() {
    return {
      error: null,
      addNew: false,
    };
  },
  computed: {
    filteredExpensesGroup() {
      return this.$store.getters["groups/expensesGroup"];
    },
  },
  methods: {
    onMountGettingGroups() {
      return this.$store.dispatch("groups/gettingGroups");
    },
    searchGroups(searchParam) {
      return this.$store.dispatch("groups/gettingGroups", searchParam);
    },
    toggleAddingNewGroupd() {
      this.addNew = !this.addNew;
    },
    async toggleAddingNewGroupClose() {
      window.setTimeout(() => {
        this.addNew = false;
      }, 150);
    },
  },
  mounted() {
    this.onMountGettingGroups();
  },
};
</script>
