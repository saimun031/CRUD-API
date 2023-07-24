<template>
  <div>
    <h1>Update data</h1>
    <br />
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
    <button  @click="update" class="btn btn-primary">Update</button>
  </div>

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
    update() {
    //   this.update = true;
      axios
        .put("https://64ae4376c85640541d4cb33a.mockapi.io/api/user",this.user.id)
        .then((res) => {
          console.log(res.data);
          router.push('/');
        });
        
    },
  },
};
</script>

<style></style>
