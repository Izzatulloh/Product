<template>
  <div class="nav">
    <div class="container">
      <ul class="nav__list">
        <li class="nav__item" v-for="item in categoryArr" :key="item.id">
            <button class="nav__btn" @click="$emit('filterCategory',item)"> {{ item }}</button>
        </li>
      </ul>
      <button class="nav__btn" v-if="product.filter"  @click="$emit('turnOff')">Otmen</button>
    </div>
  </div>
</template>
<script setup>
import {useProduct} from '../../stores/product.js'
const props = defineProps({
  categoryArr: Array,
});
const product = useProduct()

</script>
<style lang=""></style>
