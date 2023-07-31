<template>
  <div>
    <h1>Creat Post</h1>
    <br />
    <form class="input-feild" @submit.prevent="creatdata">
      <label>Title: </label>
      <input
        type="text"
        v-model="posts.title"
        placeholder="enter your title"
        required
      />
      <br /><br />
      <label>Description: </label>
      <input
        type="textarea"
        v-model="posts.description"
        placeholder="enter your description"
        required
      />

      <div>
        <br />
        <button class="btn btn-primary">submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import router from "@/router";
export default {
  name: "creatApi",
  data() {
    return {
      posts: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    creatdata() {
      axios
        .post("https://64ae4376c85640541d4cb33a.mockapi.io/api/posts", this.posts)
        .then(() => {
          router.push("/post");
        });
    },
  },
};
</script>

<style></style>
