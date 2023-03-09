import { defineStore } from "pinia";
import axios from "axios";
import { cookies } from "../servis/cookie";
export const useAuth = defineStore("auth", {
  state: () => ({
    login: false,
    token:null
  }),
  actions: {
    async getUser(name, pass) {
      try {
        const res = await axios.post("https://dummyjson.com/auth/login", {
          username: name,
          password: pass,
        });
        const data = res.data;
        this.token = data.token
        if (res.status == 200) cookies.set("token", data.token);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
