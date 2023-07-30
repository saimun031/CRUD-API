<template>
  <div>
    <h1>Update data</h1>
    <br />
    <form class="input-feild" @submit.prevent="updateUser">
    <label>Name: </label>
    <input
      type="text"
      v-model="users.name"
      placeholder="enter your name"
      required
    />
    <br /><br />
    <label>Age: </label>
    <input
      type="text"
      v-model="users.age"
      placeholder="enter your Age"
      required
    />

    <div>
      <br />
      <button class="btn btn-primary">Update</button>
    </div>
</form>
  </div>
</template>
<script>
import router from "@/router";
import axios from "axios";
export default {
  name: "updateApi",
  props: ["id"],
  data() {
    return {
      user: [],
      users: {
        name: "",
        age: "",
      },
    };
  },
  methods: {
    async updateUser() {
      try {
        const users = await axios.put(
          "https://64ae4376c85640541d4cb33a.mockapi.io/api/user/" +
            this.$route.params.id,
          {
            name: this.users.name,
            age: this.users.age,
          }
        );

        console.log(users.data);
        alert("User updated!");
        router.push('/');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
