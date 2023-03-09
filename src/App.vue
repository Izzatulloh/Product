<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from "vue";
import {  RouterView } from "vue-router";
import { cookies } from "./servis/cookie.js";
import { useAuth } from "./stores/auth.js";
const auth = useAuth()
onMounted(() => {
  let token = cookies.get("token")
  if (token) {
    auth.token = token
  }
})
</script>
