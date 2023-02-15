<template>
  <base-card>
    <h3>Add a new expense</h3>
    <form>
      <div class="adding-new-expense">
        <input
          type="text"
          name="expense-name"
          :placeholder="placeholderName"
          :class="fieldClassNameCom"
          v-model="expenseName"
        />
        <input
          type="number"
          :class="fieldClassAmountCom"
          name="expense-amount"
          :placeholder="placeholderAmount"
          v-model="expenseAmount"
          required
        />
        <input
          type="text"
          name="expense-amount"
          class="form__field"
          placeholder="Expense description(optional)"
          v-model="expenseDescription"
        />
      </div>
      <button @click.prevent="addNewGroupToList">Add</button>
    </form>
  </base-card>
</template>
<script>
import BaseCard from "../UI/BaseCard.vue";
export default {
  components: { BaseCard },
  emits: ["add-new-expense-to-list"],
  data() {
    return {
      expenseName: "",
      expenseAmount: "",
      expenseDescription: null,
      fieldClassName: "form__field",
      fieldClassAmount: "form__field",
      placeholderName: "Expense name",
      placeholderAmount: "Expense amount",
    };
  },
  computed: {
    fieldClassNameCom() {
      return this.fieldClassName;
    },
    fieldClassAmountCom() {
      return this.fieldClassAmount;
    },
  },
  methods: {
    async addNewGroupToList() {
      if (this.expenseName === "") {
        this.fieldClassName = "form__field_alt";
        this.placeholderName = "Please, enter the expense name.";
      } else if (this.expenseAmount === "") {
        this.fieldClassAmount = "form__field_alt";
        this.placeholderAmount = "Please, enter the expense amount.";
      } else {
        const data = {
          name: this.expenseName,
          amount: this.expenseAmount,
          description: this.expenseDescription,
          expenses_group_id: this.$route.params.id,
        };
        this.$emit("add-new-expense-to-list");
        await this.$store.dispatch("expense/addNewExpense", data);
      }
    },
  },
};
</script>
<style scoped>
h3 {
  margin-top: 0px;
}
form {
  display: flex;
  justify-content: space-between;
  /* gap: 1rem; */
  align-items: flex-end;
  align-content: stretch;
}
.adding-new-expense {
  width: 85%;
  /* margin: auto; */
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
button {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  transition: all 0.2s;
}

button:hover,
button:active {
  background-color: #edd2ff;
  border-color: #270041;
  color: #270041;
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
button:active {
  transform: translateY(1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1rem;
  color: rgb(0, 0, 0);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form__field::placeholder {
  color: #9b9b9b;
}
.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #9b9b9b, #edd2ff);
  border-image-slice: 1;
}
.form__field:required,
.form__field:invalid {
  box-shadow: none;
}
.form__field_alt {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #ff0000;
  outline: 0;
  font-size: 1rem;
  color: rgb(0, 0, 0);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form__field_alt::placeholder {
  color: #ff5252;
}
</style>