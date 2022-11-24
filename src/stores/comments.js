import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import { db } from "../firebase/firebase";

export const useCommentStore = defineStore("comments", {
    state: () => ({

        comments: [],
    }),
    getters: {
        getComments: (state) => [...state.comments]
    },
    actions: {
        async commentsDocs(id) {
            const querySnapshot = await getDocs(collection(db, "products", "comments", id));
            if (querySnapshot !== null || querySnapshot !== undefined) {
                if (querySnapshot.empty == false) {
                    this.comments = []
                    querySnapshot.forEach((doc) => {

                        const comment = {
                            "id": doc.data().id,
                            "username": doc.data().name,
                            "description": doc.data().description,
                            "date": doc.data().date,
                            "likes": doc.data().likes,
                            "dislikes": doc.data().dislikes,

                        }

                        this.comments.push(comment);
                    })
                } else {
                    this.comments = []
                }

            }
        }
        ,
        async uploadComment(idProduct, comment) {
            try {
                await setDoc(doc(db, "products", "comments", idProduct, crypto.randomUUID()), comment);
            } catch (error) {
                console.log(error)
            }


        },

    }
})