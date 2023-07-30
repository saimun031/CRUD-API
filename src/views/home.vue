<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>Learn AXIOS Api</h1>

  <div class="table">
    <router-link class="btn btn-primary" to="/add-data"> Add Data </router-link>

    <br /><br />
    <table class="table table-bordered">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Action</th>
      </thead>
      <tbody v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td>
          <!-- edit -->
          <!-- <button class="btn btn-primary" @click="edit(user.id)">Edit</button> -->
          
           <router-link class="btn btn-primary" :to="'/update-data/' + user.id"> Edit </router-link>
          
          <!-- delete -->
          &nbsp;<button class="btn btn-danger" @click.prevent="deletedata(user.id)">
            Delete
          </button>
        </td>
      </tbody>
    </table>
  </div>
  <br /><br /><br />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";
import router from '@/router';

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      users: {},
    };
  },
  mounted() {
    this.all();
    //  .then(response => this.user = response.data)
  },
  methods: {
    add() {
      axios.post(`https://64ae4376c85640541d4cb33a.mockapi.io/api/user`, {
        // id,
        // name,
        // age
      });
    },
    edit(id) {
      id;
      axios.put(`https://64ae4376c85640541d4cb33a.mockapi.io/api/user`, {
        // id,
        // name,
        // age,
      });
    },
    deletedata(id) {
        console.log(id)

      let x = window.confirm("You want to delete the data?");
      if(x){
      axios.delete("https://64ae4376c85640541d4cb33a.mockapi.io/api/user/" + id)
      .then((res) => {
             console.log(res.users);
      alert("Data Deleted");
          router.push('/');
        });
   
    }
    router.push('/');
          },

//  deletedata(id) {
//     axios.delete("https://64ae4376c85640541d4cb33a.mockapi.io/api/user" + id)
//     .then(()=>{
//     this.all();
//  })
//  },


    all() {
      axios
        .get("https://64ae4376c85640541d4cb33a.mockapi.io/api/user")
        .then(
          (res) =>
            // this.user=res.data;
            (this.users = res.data)
          //console.log(res.data)
        )
        .catch((error) => console.log(error));
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
</style>
