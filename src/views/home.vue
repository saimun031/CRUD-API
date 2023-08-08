<template>
  <router-link class="btn1 btn btn-primary" to="/post">Post data</router-link>
  <h1>Learn AXIOS Api</h1>
  <div class="table">
    <router-link class="btn btn-primary" to="/add-data"> Add User </router-link>
    <br /><br />
    <table class="table table-bordered">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Action</th>
      </thead>
      <!-- <tbody v-for="user in users" :key="user.id"> -->
        <tbody  v-for="(user, index) in users" :key="index" >
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td>
          <!-- edit -->
          <!-- <button class="btn btn-primary" @click="edit(user.id)">Edit</button> -->
          <router-link class="btn btn-success" :to="'/show-data/' + user.id">
            Show User
          </router-link>
          &nbsp;
          <router-link class="btn btn-info" :to="'/update-data/' + user.id">
            Edit
          </router-link>

          <!-- delete -->
          <!-- &nbsp;<button
            class="btn btn-danger"
            @click.prevent="deletedata(user.id)"
          >
            Delete
          </button> -->
         &nbsp; <button
            class="btn btn-danger"
            @click.prevent="deletedata(user.id)"
          >
            Delete
          </button>
        </td>
      </tbody>
    </table>
  </div>
  <br /><br /><br />
</template>

<script>
// import axios from "axios";
import { mapState } from 'vuex';

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.all();
  },
  methods: {
    deletedata(id) {
this.$store.dispatch('deletedata', id);
this.all();

    },

    all() {
      this.$store.dispatch('loadPost');
    },
  },
  computed:{
  ...mapState([
    'users'
  ]),

    userId() {
      // Access the router ID as 'userId' from Vue Router's $route
      return this.$route.params.id;
      
    },
},

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  border: 1px solid black;
  border-radius: 3px;
  width: 100%;
  padding: 10px;
}
td {
  padding: 10px;
}
button {
  padding: 10px;
  font-size: 15px;
  /* border-radius: 5px; */
}
.btn1{
  /* margin-top: -25%; */
  margin-right: 80%;
}
</style>
