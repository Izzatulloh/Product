<template>
  <Login v-if="auth.login"></Login>
  <div class="container">
    <button class="login__btn" @click="changeAuth">Login</button>
  </div>
  <Navbar
    :categoryArr="categoryArr"
    @filterCategory="filterCategory"
    @turnOff="turnOff"
    :filter="filter"
  />

  <div class="container" v-if="productArr">
    <div class="product">
      <ProductCard :productArr="productArr" :token="token" />
    </div>
    <div class="product__page">
      <button
        class="product__page-btn"
        v-for="page in pages"
        :key="page"
        :disabled="pageNumber == page"
        @click="pagePush(page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
  <Loader v-else />
</template>
<script setup>
import Navbar from "../Navbar/Navbar.vue";
import Loader from "../Loader/Loader.vue";
import ProductCard from "./ProductCard.vue";
import Login from '../Auth/Login.vue'
import { cookies } from "../../servis/cookie";
import { ref, onMounted, computed } from "vue";
import { useProduct } from "@/stores/product.js";
import { useAuth } from "@/stores/auth.js";
const auth = useAuth();
const product = useProduct();
const skip = ref(0);
const pageNumber = ref(1);
const token = ref();
const filter = ref()
onMounted(() => {
  product.getProducts(skip.value);
  product.getCategory();
  token.value = cookies.get("token")
});

const productArr = computed(() => product.products);
const categoryArr = computed(() => product.category);
function turnOff() {
  product.products = null;
  product.filter = false
  product.getProducts(skip.value);
}
function filterCategory(item) {
  product.filter = true
  product.products = null;
  skip.value = 0;
  pageNumber.value = 1;
  product.getProducts(skip.value, item);
}
function pagePush(page) {
  pageNumber.value = page;
  product.products = null;
  skip.value = (page - 1) * 12;
  product.getProducts(skip.value);
}

const pages = computed(() => {
  return Math.ceil(product.productTotal / 12);
});
function changeAuth() {
  auth.login = true
}
</script>
<style lang=""></style>
