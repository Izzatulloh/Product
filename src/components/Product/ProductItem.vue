<template>
  <div class="container" v-if="product.productOne">
    <router-link class="product__item-btn" to="/">Back</router-link>
    <div class="product__item">
      <img class="product__item-img" :src="product.productOne.thumbnail" alt="" />
      <div class="product__item-info">
        <p class="product__card-brand">Brand: {{ product.productOne.brand }}</p>
        <h3 class="product__card-title">Name: {{ product.productOne.title }}</h3>
        <p class="product__card-stock">category: {{ product.productOne.category }}</p>
        <p class="product__card-stock">description: {{ product.productOne.description }}</p>
        <div class="product__card-item">
          <p class="product__card-price">Cost: {{ product.productOne.price }}$</p>
          <button class="product__card-btn" @click="openModal(product.productOne.id)">
            <img class="product__card-img" src="../../assets/images/comment.png" alt="" />
          </button>
        </div>
        <div v-if="route.params.id == comments.id">
          <ul class="stars">
            Rank:
            <li class="star" v-for="starIndex in 5" :key="starIndex">
              <button
                class="star__button"
                :class="comments.rank >= starIndex ? 'active' : ''"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.27 3.72995L15.27 7.72995C15.3663 7.92172 15.5075 8.08737 15.6816 8.21274C15.8557 8.33812 16.0576 8.4195 16.27 8.44995L20.67 9.07995C20.9154 9.1144 21.1461 9.21721 21.3358 9.37662C21.5255 9.53604 21.6664 9.74562 21.7426 9.9814C21.8188 10.2172 21.827 10.4696 21.7664 10.7099C21.7059 10.9501 21.5789 11.1685 21.4 11.3399L18.23 14.3999C18.0735 14.5474 17.9567 14.7318 17.8903 14.9363C17.8238 15.1408 17.81 15.3587 17.85 15.5699L18.6 19.8999C18.6402 20.1431 18.6121 20.3926 18.5188 20.6207C18.4254 20.8488 18.2706 21.0464 18.0715 21.1916C17.8723 21.3368 17.6368 21.4238 17.3911 21.443C17.1454 21.4621 16.8992 21.4126 16.68 21.2999L12.68 19.2399C12.4917 19.1418 12.2824 19.0905 12.07 19.0905C11.8576 19.0905 11.6484 19.1418 11.46 19.2399L7.46003 21.2999C7.24083 21.4126 6.99466 21.4621 6.74896 21.443C6.50327 21.4238 6.26773 21.3368 6.0686 21.1916C5.86948 21.0464 5.71461 20.8488 5.62128 20.6207C5.52795 20.3926 5.49982 20.1431 5.54003 19.8999L6.29003 15.5699C6.34494 15.3616 6.34718 15.1428 6.29656 14.9333C6.24594 14.7239 6.14404 14.5303 6.00003 14.3699L2.80003 11.3099C2.62118 11.1385 2.4942 10.9201 2.43362 10.6799C2.37304 10.4396 2.3813 10.1872 2.45746 9.9514C2.53361 9.71562 2.67459 9.50604 2.86427 9.34662C3.05395 9.18721 3.28466 9.0844 3.53003 9.04995L7.93003 8.41995C8.14243 8.3895 8.34431 8.30812 8.51844 8.18274C8.69257 8.05737 8.83379 7.89172 8.93003 7.69995L10.93 3.69995C11.0444 3.48759 11.2148 3.31062 11.4226 3.18827C11.6305 3.06593 11.8679 3.00288 12.1091 3.00597C12.3503 3.00906 12.586 3.07818 12.7907 3.20581C12.9954 3.33345 13.1611 3.51472 13.27 3.72995Z"
                    fill="#e3dede"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
          <p>Comment: {{ comments.comment }}</p>
        </div>
      </div>
    </div>
    <Modal v-if="comments.modal" :productId="productId" />
  </div>
  <loader v-else></loader>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useProduct } from "../../stores/single.js";
import { useComment } from "../../stores/comment.js";
import Modal from "../Modal/Modal.vue";
import Loader from "../Loader/Loader.vue";
import { ref,onMounted } from "vue";
const comments = useComment();
const product = useProduct();
const route = useRoute();
let productId = ref(null);
onMounted(() => {
  product.getProductsById(route.params.id);
})

function openModal(id) {
  productId.value = id;
  comments.modal = true;
}

</script>
