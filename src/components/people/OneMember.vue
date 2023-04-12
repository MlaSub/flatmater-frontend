<template>
  <div class="members">
    <h3>{{ titleMember }}</h3>
    <button class="btn is-member" @click="deleting" v-if="isMemberOfGroup">
      {{ removeButtonText }}
    </button>
    <button class="added btn" @click="addMember" v-else>Add</button>
  </div>
</template>
<script>
export default {
  props: ["name", "id", "surname", "member"],
  data() {
    return {
      isMember: this.member,
      confirmDelete: false,
      removeButton: "Remove",
    };
  },
  computed: {
    titleMember() {
      return this.name + " " + this.surname;
    },
    isMemberOfGroup() {
      return this.isMember;
    },
    removeButtonText() {
      return this.removeButton;
    },
  },
  methods: {
    async addMember() {
      const data = {
        expenses_group_id: this.$route.params.id,
        user_id: this.id,
      };
      this.isMember = true;
      await this.$store.dispatch("members/addingMemberToGroup", data);
    },
    async deleting() {
      if (this.confirmDelete === false) {
        this.removeButton = "Confirm";
        this.confirmDelete = true;
      } else {
        this.isMember = false;
        this.removeButton = "Remove";
        this.confirmDelete = false;
        const data = {
          member_id: this.id,
          group_id: this.$route.params.id,
        };
        await this.$store.dispatch("members/removingMemberFromGroup", data);
      }
    },
  },
};
</script>
<style scoped>
.members {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background: rgb(245, 235, 224, 0.1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  padding: 0.5rem;
  margin: 0.5rem auto;
  max-width: 90%;
}
h3 {
  padding-left: 5px;
}
.btn {
  font-size: 10pt;
  border: 1px solid;
  border-radius: 1rem;
  width: 75px;
  height: 30px;
  cursor: pointer;
  margin-right: 5px;
}

.added {
  color: #3399ff;
  border-color: #3399ff;
  background-color: #ffffff;
  transition: all 0.15s;
}
.added:hover {
  background-color: #3399ff;
  color: #ffffff;
}
.added:active {
  opacity: 80%;
}
.is-member {
  text-align: center;
  color: white;
  background-color: red;
  border-color: red;
  transition: all 0.1s;
}
.is-member:hover {
  color: red;
  border-color: red;
  background-color: white;
}
.is-member:active {
  background-color: rgba(255, 0, 0, 0.1);
}
</style>