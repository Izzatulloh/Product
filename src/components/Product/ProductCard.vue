<template>
  <div class="product__card" v-for="product in productArr" :key="product.id">
    <img :src="product.thumbnail" alt="" />
    <p class="product__card-brand">Brand: {{ product.brand }}</p>
    <h3 class="product__card-title">Name: {{ product.title }}</h3>
    <p class="product__card-stock">category: {{ product.category }}</p>
    <div class="product__card-item">
      <p class="product__card-price">Cost: {{ product.price }}$</p>
    </div>
    <router-link v-if="reg.token" :to="1 ? '/' + product.id : '/'" class="product__card-info">Product</router-link>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { useAuth } from "../../stores/auth";
const props = defineProps(["productArr","token"]);
const reg = useAuth()



</script>
