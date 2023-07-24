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
    <input type="text" 
    v-model="user.age" 
    placeholder="enter your Age" 
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
import router from '@/router';
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
      this.creatdata = true;
      axios
        .post("https://64ae4376c85640541d4cb33a.mockapi.io/api/user",this.user)
        .then((res) => {
          console.log(res.data);
          router.push('/');
        });
        
    },
  },
};
</script>

<style></style>
