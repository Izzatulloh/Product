import {
  defineStore
} from 'pinia'
import axios from 'axios'

export const useProduct = defineStore('product', {
  state: () => ({
    products: null,
    productTotal: null,
    category: null,
    filter:false
  }),
  actions: {
    async getProducts(skip,category) {
      let url = `https://dummyjson.com/products?limit=12&skip=${skip}`
      if (category) {
        url = `https://dummyjson.com/products/category/${category}?limit=12&skip=${skip}`
      }
      const res = await axios.get(url)
      let data = res.data
      this.productTotal = data.total
      this.products = res.data.products
    },
    async getCategory() {
      let res = await axios.get("https://dummyjson.com/products/categories")
      this.category = res.data
    }
  },
 

})