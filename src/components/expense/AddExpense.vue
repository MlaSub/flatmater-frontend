<template>
  <base-card>
    <h3>Add a new expense</h3>
    <form>
      <div>
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
        <div class="check">
          <input
            type="radio"
            name="bill"
            v-model="bill"
            id="equal"
            value="equal"
            checked
          /><label for="equal" class="radio">I pay, equal split</label>
          <input
            type="radio"
            name="bill"
            id="mybill"
            v-model="bill"
            value="self"
          /><label for="mybill" class="radio">I pay, my bill</label>
          <input
            type="radio"
            name="bill"
            v-model="bill"
            id="someone"
            value="someone"
          /><label for="someone" class="radio">Someone paid, equal split</label>
          <input
            type="radio"
            id="try"
            name="bill"
            v-model="bill"
            value="unequal"
            disabled
          />
          <label for="try" class="radio">Unequal split and pay</label>
        </div>
        <label class="dropdown-label" for="dropdown" v-if="bill === 'someone'"
          >Who paid for it?</label
        >
        <select
          class="dropdown"
          id="dropdown"
          name="friends"
          v-if="bill === 'someone'"
          v-model="memberId"
        >
          <option v-for="member in members" :key="member.id" :value="member.id">
            {{ member.name + " " + member.surname }}
          </option>
        </select>

        <button @click.prevent="addNewGroupToList" class="btn add">Add</button>
      </div>
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
      bill: "equal",
      memberId: null,
    };
  },
  computed: {
    fieldClassNameCom() {
      return this.fieldClassName;
    },
    fieldClassAmountCom() {
      return this.fieldClassAmount;
    },
    members() {
      return this.$store.getters["expense/currentMembers"];
    },
    currentUser() {
      return this.$store.getters["currentUserID"];
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
        console.log(this.memberId);
        console.log(this.currentUser);
        const payment_user_id = this.memberId || this.currentUser;
        const data = {
          name: this.expenseName,
          amount: this.expenseAmount,
          description: this.expenseDescription,
          expenses_group_id: this.$route.params.id,
          payment_user_id: payment_user_id,
          payment_module: this.bill,
        };
        console.log(data);
        this.$emit("add-new-expense-to-list");
        await this.$store.dispatch("expense/addNewExpense", data);
      }
    },
    groupInfo() {
      return this.$store.dispatch(
        "expense/groupDetails",
        this.$route.params.id
      );
    },
    setSelectedMemberId(event) {
      const selectedOption = event.target.options[event.target.selectedIndex];
      this.memberId = selectedOption.id;
    },
  },
  mounted() {
    this.groupInfo();
  },
};
</script>
<style scoped>
h3 {
  margin-top: 0px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.btn {
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

.btn:hover,
.btn:active {
  background-color: #edd2ff;
  border-color: #270041;
  color: #270041;
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.btn:active {
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
.add {
  width: 100%;
}
.check {
  display: flex;
  margin: 10px;
  gap: 0.5rem;
}
input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
}

.radio {
  border-radius: 12px;
  width: 25%;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  padding: 0.5rem;
  text-align: center;
}
input[type="radio"]:checked + label {
  background-color: wheat;
  color: black;
  font-weight: bold;
}
.dropdownplc {
  display: flex;
}
.dropdown {
  -webkit-appearance: none;
  padding: 7px 40px 7px 12px;
  width: 100%;
  border: 1px solid #e8eaed;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  transition: all 150ms ease;
  margin: 5px;
}
.dropdown-label {
  margin-left: 10px;
}
</style>