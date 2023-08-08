import router from "@/router";
import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
    posts: [],
  },

  actions: {
    //GET Post
    loadPost({ commit }) {
      axios
        .get("https://64ae4376c85640541d4cb33a.mockapi.io/api/user")
        .then((data) => {
          console.log(data.data);
          let users = data.data;
          commit("SET_POST", users);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //ADD Post
    creatdata({ commit }, user) {
          // console.log(user);    
      axios
        .post(`https://64ae4376c85640541d4cb33a.mockapi.io/api/user/`, user)
        .then(() => {
          commit("ADD_POST", user);
          console.log(user);
          router.push("/");
        });
    },

    //DELETE Post
    deletedata({ commit }, userId) {
      let x = window.confirm("You want to delete the data?");
      if (x) {
        try {
          axios.delete(
            `https://64ae4376c85640541d4cb33a.mockapi.io/api/user/${userId}`
          );
          commit("delet_POST", userId);
          console.log(userId);
          alert("Data Deleted");
        } catch (error) {
          console.error("Error:", error);
        }
      }
    },
  },

  mutations: {
    //GET
    SET_POST(state, users) {
      state.users = users;
    },

    //ADD
    ADD_POST(state, user) {
      state.user = user;
    },

    // DELETE userId
    delet_POST(state, userId) {
      state.users = userId;
    },
  },
  getters: {},
  modules: {},
});
