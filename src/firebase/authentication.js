import { defineStore } from "pinia";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  deleteUser,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { auth } from "./firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import router from "@/router";

export const useAuthenticationStore = defineStore("authentication", {
  state: () => ({
    auth: auth,
    userLogged: null,
    userId: null,
    isAdmin: false,
  }),
  getters: {
    getAdmin: (state) => [state.isAdmin],
    getUser: (state) => [state.userLogged],
  },
  actions: {
    signIn(email, password) {
      signInWithEmailAndPassword(auth, email, password).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        alert("Email or password are incorrect, please try again");
      });
    },

    async addUserToDatabase(db, userId, userInfo, username) {
      const userInfoUpload = {
        email: userInfo.email,
        username: username,
        id: userId,
        isAdmin: false,
      };
      try {
        await setDoc(doc(db, "users", userId), userInfoUpload);
      } catch (error) {
        console.log(error);
      }
    },

    signUp(email, password, username) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.addUserToDatabase(db, user.uid, user, username);
          this.setUser();
          console.log("usuario creado", user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    },

    logOut() {
      signOut(auth)
        .then(() => {
          console.log("Logged out");
        })
        .catch((error) => {
          alert(error);
        });
    },

    async setUser(user) {
      if (user) {
        const user = auth.currentUser;
        const querySnapshot = await getDoc(doc(db, "users", user.uid));
        this.userLogged = querySnapshot.data();
        this.userId = user.uid;
        this.isAdmin = this.userLogged.isAdmin;
      } else {
        console.log("User is not signed in");
      }
    },

    async updateUserInfo(email, username) {
      const user = auth.currentUser;
      const querySnapshot = doc(db, "users", user.uid);
      await updateDoc(querySnapshot, {
        email: email,
        username: username,
      });
    },
    async updateEmailInfo(email, actualEmail, username, password) {
      signInWithEmailAndPassword(auth, actualEmail, password).then(
        (userCredential) => {
          const user = userCredential.user;
          updateEmail(auth.currentUser, email);
        }
      );
      const user = auth.currentUser;
      const querySnapshot = doc(db, "users", user.uid);
      await updateDoc(querySnapshot, {
        email: email,
        username: username,
      });
    },
    changePassword(email, password, newPassword) {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          updatePassword(auth.currentUser, newPassword);
        }
      );
    },
    eliminateUser() {
      const user = auth.currentUser;

      deleteUser(user)
        .then(async () => {
          await deleteDoc(doc(db, "users", user.uid));
          alert("Your account have been eliminate gratefully");
          router.push({ name: "home" });
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
});
