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

    //show data
    all({ commit }, userss) {
      console.log(userss);
      axios
        .get(`https://64ae4376c85640541d4cb33a.mockapi.io/api/user/${userss}`)
        .then((res) => {
          userss = res.data;
          commit("Show_POST", userss);
          console.log(userss);
        }, console.log(userss))

        .catch((error) => console.log(error));
    },

    //update data
    updateUser({ commit }, users) {
      console.log(users);
      try {
        axios.put(
          `https://64ae4376c85640541d4cb33a.mockapi.io/api/user/`, users,
          {
            id: users.id,
            name: users.name,
            age: users.age,
          }
        );
        commit("Update_POST", users);
        console.log(users);
        alert("User updated!");
        router.push("/");
      } catch (e) {
        console.log(e);
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

    //SHOW post
    Show_POST(state, userss) {
      state.users = userss;
    },

    //UPDATE Post
    Update_POST(state, users) {
      state.users = users;
    },
  },
  getters: {},
  modules: {},
});
