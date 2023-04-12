<template>
  <the-page-navigation
    :toggleGroups="true"
    :addNewButton="true"
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
    @moreOptionsClick="closeMoreOptions"
  ></expenses-group>
  <member-search v-if="moreOptions" @closing="closeMoreOptions"></member-search>
</template>
<script>
import ThePageNavigation from "../layout/ThePageNavigation.vue";
import ExpensesGroup from "../../components/expenses-group/ExpensesGroup.vue";
import AddingExpenseGroup from "../expenses-group/AddingExpenseGroup.vue";
import MemberSearch from "../people/MemberSearch.vue";
export default {
  components: {
    ExpensesGroup,
    ThePageNavigation,
    AddingExpenseGroup,
    MemberSearch,
  },
  data() {
    return {
      error: null,
      addNew: false,
      moreOptions: false,
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
    searchGroups(data) {
      return this.$store.dispatch("groups/gettingGroups", data);
    },
    toggleAddingNewGroupd() {
      this.addNew = !this.addNew;
    },
    async toggleAddingNewGroupClose() {
      window.setTimeout(() => {
        this.addNew = false;
      }, 150);
    },
    closeMoreOptions() {
      this.moreOptions = !this.moreOptions;
    },
  },
  mounted() {
    this.onMountGettingGroups();
  },
};
</script>
