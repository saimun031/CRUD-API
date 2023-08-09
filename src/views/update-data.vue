<template>
  <div>
    <h1>Update User</h1>
    <br />
    <form class="input-feild" @submit.prevent="updateUser">
            <label>ID: {{ users.id }}</label>
      <!-- <input
        type="text"
        v-model="users.id"
        placeholder="enter your name"
        required
      />  -->
      <br /><br />
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
    <br />
    <router-link class="btn btn-primary" to="/">Go Back</router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex';
// import router from "@/router";
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
        id:"",
      },
    };
  },
  mounted() {
    this.all();
  },
  methods: {
    all() {
      axios
        .get(
          `https://64ae4376c85640541d4cb33a.mockapi.io/api/user/${this.$route.params.id}`
        )
        .then(
          (res) =>
            (this.users = res.data)
        )
        .catch((error) => console.log(error));
    },

    async updateUser() {
      // try {
      //   const users = await axios.put(
      //     "https://64ae4376c85640541d4cb33a.mockapi.io/api/user/" +
      //       this.$route.params.id,
      //     {
      //       name: this.users.name,
      //       age: this.users.age,
      //     }
      //   );

      //   console.log(users.data);
      //   alert("User updated!");
      //   router.push("/");
      // } catch (e) {
      //   console.log(e);
      // }
       this.$store.dispatch('updateUser', this.$route.params.id);
    },
  },
  computed:{
  ...mapState([
    'users'
  ]),
}
};
</script>

<style></style>
