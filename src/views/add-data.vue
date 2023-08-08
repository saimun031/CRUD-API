<template>
  <div>
    <h1>Add data</h1>
    <br />
    <form class="input-feild" @submit.prevent="creatdata">
      <label>Name: </label>
      <input
        type="text"
        v-model="user.name"
        placeholder="enter your name"
        required
      />
      <br /><br />
      <label>Age: </label>
      <input
        type="text"
        v-model="user.age"
        placeholder="enter your Age"
        required
      />

      <div>
        <br />
        <button class="btn btn-primary">submit</button>
      </div>
    </form>
       <br>
        <router-link class="btn btn-primary" to="/">Go Back</router-link>
  </div>
</template>
<script>
// import axios from "axios";
// import router from "@/router";
import { mapState } from 'vuex';
export default {
  name: "creatApi",
  data() {
    return {
      user: {
        name: "",
        age: "",
      },
    };
  },
  methods: {
    creatdata() {
        this.$store.dispatch('creatdata', this.user);
    },
  },
  computed:{
  ...mapState([
    'users'
  ])
}
};
</script>

<style></style>
