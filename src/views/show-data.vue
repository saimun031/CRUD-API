<template>
  <div>
    <h1>Show User</h1>
    <br />
    <!-- <div v-for="user in users" :key="user.id"> -->
    <label>Name: </label>
    {{ users.name }}
    <br />
    <label>Age: </label>
    {{ users.age }}
    <!-- {{ users }} -->
    <!-- </div> -->
  </div>
  <br />
  <router-link class="btn btn-primary" to="/">Go Back</router-link>
  <!-- {{ this.$route.params.id }} -->
</template>
<script>
import axios from "axios";
export default {
  name: "updateApi",
  props: ["id"],
  data() {
    return {
      users: {},
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
        .then((res) => (this.users = res.data))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
