import {
    defineStore
} from 'pinia'
import axios from "axios";

export const useComment = defineStore('comment', {
    state: () => ({
        modal: false,
        rank: null,
        comment: null,
        id:null
    }),
    actions: {
        async addComment(id, comment, stars) {
            try {
                let res = await axios.post('https://dummyjson.com/comments/add', {
                    body: JSON.stringify([comment,stars]),
                    postId: id,
                    userId: 1,

                })
                if (res.status >= 300) throw Error("Comment Error")
                const data =JSON.parse(res.data.body)
                    this.rank  = data[1]
                    this.comment  = data[0]
                    this.id = res.data.postId
                 
              
            } catch (error) {
                alert(error.message)
            }
        },

    },


})