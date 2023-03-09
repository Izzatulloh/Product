import { createRouter, createWebHistory } from 'vue-router'
import Product from '../components/Product/Product.vue'
import ProductItem from '../components/Product/ProductItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Product", component: Product },
    { path: "/:id", name: "ProductItem", component: ProductItem },
  ]
})

export default router
