<template>
  <div class="container">
    <div class="comments">
      <div class="comment">
        <!-- New Comment //-->
        <div class="comment__Container">
          <div class="comment_content">
            <div class="username">
              <a href="#" class="fw-bold link-dark">Studio KonKon</a>
            </div>
            <div class="comment__input">
              <textarea
                class="form-control w-100"
                placeholder="Leave a comment here"
                id="my-comment"
                required="true"
                v-model="comment"
                style="height: 7rem"
              ></textarea>
            </div>
            <div class="commentBtn">
              <button class="btn btn-sm" @click="reset">cancel</button>
              <button class="btn" @click="addComment">comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="comments">
    <h4 class="mb-4">{{ allComments().length }} Comments</h4>

    <div class="py-3">
      <div
        class="d-flex comment"
        v-for="comment in allComments()"
        :key="comment"
      >
        <div class="flex-grow-1 ms-3">
          <div class="mb-1 content">
            <a href="#" class="fw-bold link-dark me-1 nombre">{{
              comment.username
            }}</a>
            <span class="text-muted text-nowrap">{{ comment.date }}</span>
          </div>
          <div class="mb-2 content description">
            {{ comment.description }}
          </div>
          <div class="hstack align-items-center mb-2 content">
            <span class="me-3 small likes">👌{{ comment.likes }}</span>
            <span class="me-3 small likes">👎{{ comment.dislikes }}</span>
            <button
              class="link-danger small ms-3"
              href="#"
              v-if="deleteButton(comment.id)"
            >
              DELETE
            </button>
            <button
              class="link-danger small ms-3 noneButton"
              href="#"
              v-else
            ></button>
          </div>
          <a class="fw-bold d-flex align-items-center" href="#">
            <i class="zmdi zmdi-chevron-down fs-4 me-3"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import { mapStores } from "pinia";
import { useAuthenticationStore } from "../firebase/authentication";
import { useCommentStore } from "../stores/comments";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "@firebase/firestore";
export default {
  data() {
    return {
      comment: "",
      user: "",
      productId: "",
    };
  },

  computed: {
    ...mapStores(useCommentStore),
    ...mapStores(useAuthenticationStore),
  },
  mounted() {
    onAuthStateChanged(auth, async (usuario) => {
      if (usuario != null) {
        const querySnapshot = await getDoc(doc(db, "users", usuario.uid));
        this.user = querySnapshot.data();
      } else {
        this.user = null;
      }
    });
    this.productId = this.$route.params.productId;
    this.commentsStore.commentsDocs(this.productId);
  },
  methods: {
    addComment() {
      if (this.user != null) {
        const comment = {
          id: this.user.id,
          name: this.user.username,
          description: this.comment,
          date: this.dateGetter(),
          likes: 0,
          dislikes: 0,
        };
        this.commentsStore.uploadComment(this.productId, comment);
        this.commentsStore.commentsDocs(this.productId);
        this.comment = "";

      } else {
        alert("Sign In or Sign up first");
      }
    },
    deleteButton(id) {
      let variation = false;
      onAuthStateChanged(auth, async (usuario) => {
        if (usuario.uid === id) {
          variation = true;
        } else {
          variation = false;
        }
      });
      return variation;
    },
    allComments() {
      console.log(this.commentsStore.getComments)
      return this.commentsStore.getComments;
    },

    dateGetter() {
      const date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      // This arrangement can be altered based on how we want the date's format to appear.
      let currentDate = `${day}-${month}-${year}`;
      return currentDate; // "17-6-2022"
    },
    reset(e) {
      e.preventDefault();
      this.empty = "";
    },
  },
};
</script>
  
  <style lang="scss">
.noneButton {
  display: none;
}
h4 {
    margin-left: 10%;
    margin-top: 20px;
    font-family: "sansation";
  }
.comment {
  font-family: "sansation";
 margin-bottom: 40px;
  .content{
    margin-left: 15%;
  }
  .nombre {
    font-family: "sansation Bold";
    text-decoration: none;
    font-size: 1.6em;
    margin-right: 20px;
    color: black;
  }
  .description {
  border: 1px solid black;
  padding: 20px;
  border-radius: 20px;
  width: 50%;
  
  }
}

.container {
  width: 100%;

  .comments {
    margin-top: 40px;
    width: 80%;
    display: flex;
    justify-content: center;
    .comment {
      width: 100%;
    }
    .comment_content {
      width: 100%;
      a {
        text-decoration: none;
        color: black;
        font-family: "Sansation";
        font-size: 1.6em;
      }
      textArea {
        width: 100%;
        margin-top: 20px;
        border-radius: 25px;
        padding: 20px;
        font-family: "sansation bold";
      }
      .btn {
        color: black;
        background-color: white;
        padding: 10px 20px;
        font-size: 1em;
        border-radius: 15px;
        margin-right: 15px;
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      .btn:hover {
        background-color: black;
        color: aliceblue;
      }
    }
  }
}
</style>