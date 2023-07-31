<template>
    <router-link class="btn1 btn btn-primary" to="/">Home</router-link>
  <h1>Post data</h1>
  <div class="table">
    <router-link class="btn btn-primary" to="/add-post"> Creat Posts </router-link>
    <br /><br />
    <table class="table table-bordered">
      <thead>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Action</th>
      </thead>
      <tbody v-for="posts in post" :key="posts.id">
        <td>{{ posts.id }}</td>
        <td>{{ posts.title }}</td>
        <td>{{ posts.description }}</td>
        <td>
          <router-link class="btn btn-success" :to="'/show-Post/' + posts.id">
            Show Post
          </router-link>
          &nbsp;
          <router-link class="btn btn-info" :to="'/update-post/' + posts.id">
            Edit Post
          </router-link>
          &nbsp;<button
            class="btn btn-danger"
            @click.prevent="deletedata(posts.id)"
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
import axios from "axios";


export default {
  name: "App",
  components: {
  },
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    this.all();
  },
  methods: {
    deletedata(id) {
      console.log(id);

      let x = window.confirm("You want to delete the data?");
      if (x) {
        axios
          .delete("https://64ae4376c85640541d4cb33a.mockapi.io/api/posts/" + id)
          .then((res) => {
            console.log(res.post);
            alert("Data Deleted");
            this.all();
          });
      }
    },

    all() {
      axios
        .get("https://64ae4376c85640541d4cb33a.mockapi.io/api/posts")
        .then(
          (res) =>
            (this.post = res.data)
        )
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>

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
