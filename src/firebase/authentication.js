import { defineStore } from "pinia";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({

        auth: auth,
        userLogged: null,
        userId: null,
        isAdmin: false,
    }),
    getters: {
        getAdmin: (state) => [state.isAdmin],
        getUser: (state) => [state.userLogged]
    }
    ,

    actions: {

        signIn(email, password) {
            signInWithEmailAndPassword(auth, email, password).then(onAuthStateChanged(auth,this.setUser()) )
                .catch((error) => {
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
                isAdmin: false
            }
            try {
                await setDoc(doc(db, "users", userId), userInfoUpload);
            }

            catch (error) {
                console.log(error);
            }
        },

        signUp(email, password, username) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {

                    const user = userCredential.user;
                    this.addUserToDatabase(db, user.uid, user, username)
                    this.setUser();
                    console.log('usuario creado', user)
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },

        logOut() {
            signOut(auth).then(() => {
                console.log('Logged out')
            }).catch((error) => {
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
            
        }
    }
});