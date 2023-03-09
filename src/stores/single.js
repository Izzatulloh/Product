import {
  defineStore
} from 'pinia'
import axios from 'axios'

export const useProduct = defineStore('single', {
  state: () => ({
    productOne: null,
  }),
  actions: {
    async getProductsById(id) {
      const res = await axios.get(`https://dummyjson.com/products/${id}`)
      let data = res.data
      this.productOne = data
    },
 
  },
 

})