<template>
  <div class="login active">
    <div class="login__form">
      <button class="login__close" @click="auth.login = false">
        <img src="../../assets/images/clear.svg" alt="" />
      </button>
      <h2 class="login__title">Login</h2>
      <p>userName: kminchelle</p>
      <input
        class="modal__text"
        type="text"
        v-model="userName"
        placeholder="Login"
      />
      <p>password: 0lelplR</p>
      <input
        class="modal__text"
        type="password"
        v-model="password"
        placeholder="Password"
      />
      <button class="modal__form-btn" @click="sendLogin(userName, password)">
        Login
      </button>
    </div>
  </div>
</template>
<script setup>
import { useAuth } from "../../stores/auth";
import { ref } from "vue";
const auth = useAuth();
const userName = ref("");
const password = ref("");

function sendLogin(userName, password) {
  if (userName && password) {
    auth.login = false;
    auth.getUser(userName, password);
  } else alert("Hamma inputlar to'ldirilishi kerak");
}
</script>
<style lang=""></style>
