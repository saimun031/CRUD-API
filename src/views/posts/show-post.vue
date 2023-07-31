<template>
  <div>
    <h1>Show data</h1>
    <br />
    <label>Title: </label>
    {{ post.title }}
    <br />
    <label>Description: </label>
    {{ post.description }}
  </div>
  <br />
  <router-link class="btn btn-primary" to="/post">Go Back</router-link>
</template>
<script>
import axios from "axios";
export default {
  name: "updateApi",
  props: ["id"],
  data() {
    return {
      post: {},
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
        .then((res) => (this.post = res.data))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
