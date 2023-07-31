<template>
  <div>
    <h1>Update Post</h1>
    <br />
    <form class="input-feild" @submit.prevent="updateUser">
      <label>Title: </label>
      <input
        type="text"
        v-model="post.title"
        placeholder="enter your name"
        required
      />
      <br /><br />
      <label>Description: </label>
      <input
        type="textarea"
        v-model="post.description"
        placeholder="enter your Age"
        required
      />
      <div>
        <br />
        <button class="btn btn-primary">Update</button>
      </div>
    </form>
    <br />
    <router-link class="btn btn-primary" to="/post">Go Back</router-link>
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
      posts: [],
      post: {
        title: "",
        description: "",
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
          `https://64ae4376c85640541d4cb33a.mockapi.io/api/posts/${this.$route.params.id}`
        )
        .then(
          (res) =>
            (this.post = res.data)
        )
        .catch((error) => console.log(error));
    },

    async updateUser() {
      try {
        const post = await axios.put(
          "https://64ae4376c85640541d4cb33a.mockapi.io/api/posts/" +
            this.$route.params.id,
          {
            title: this.post.title,
            description: this.post.description,
          }
        );

        console.log(post.data);
        alert("User updated!");
        router.push("/post");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
