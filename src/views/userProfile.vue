<template>
  <titleVue title="Your info"></titleVue>
  <div class="profileContainer">
    <div class="container">
      <div class="rightbox">
        <div class="profile">
          <h1>Personal Info</h1>
          <h2>Full Name</h2>
          <input
            v-model="username"
            placeholder="write your name"
            id="usernameinput"
          />
          <button class="btn" @click="updateUserInfo">update</button>
          <h2>Email</h2>
          <input
            v-model="email"
            placeholder="write your email"
            id="emailinput"
          />
          <button class="btn" @click="showlogin">update</button>
          <h2>Want a new password?</h2>
          <input type="password" placeholder="write a new password" /><button
            class="btn"
            @click="showloginPassword"
          >
            Change
          </button>
        </div>
      </div>
    </div>
    <div class="reauth">
      <div v-if="changeDisplay" class="inputs">
        <h1>Login to change</h1>
        <h2>Email</h2>
        <input
          v-model="actualEmail"
          placeholder="write your actual email"
          id="emailinput"
        />
        <h2>password</h2>
        <input
          type="password"
          placeholder="write your password"
          v-model="actualpassword"
        />
        <button class="btn" v-if="changeBtn" @click="updateEmailInfo">
          change
        </button>
        <button class="btn" v-else @click="ChangePassword">change</button>
      </div>
      <button class="eliminate" @click="eliminateUser">
        Eliminate Account
      </button>
      <button class="eliminate">Send a Message to Change?</button>
    </div>
  </div>
  <titleVue title="we recommend you"></titleVue>
</template>
<style lang="scss">
.title {
  margin-top: 4%;
}

$gray: #777777;
$black: #070707;
$aqua: #06312c;
$white: #ffffff;

@import url("https://fonts.googleapis.com/css?family=Nunito:400,900|Montserrat|Roboto");
$heading: "Montserrat", sans-serif;
$body: "Roboto", sans-serif;

.container {
  background: $white;
  width: 40%;
  height: 450px;
  margin: 0 5%;
  position: relative;
  margin-top: 2%;
  margin-bottom: 2%;
  box-shadow: 2px 5px 20px rgba($gray, 0.5);
  font-size: 2em;
}

.profileContainer {
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row;
  .eliminate {
    height: 20%;
    margin-top: 5%;
    margin-right: 20px;
    padding: 20px;
    color: rgb(28, 23, 23);
    background: #f6f4f4;
    border-radius: 15px;
    text-decoration: none;
    padding: 5px 35px;
    font-family: "Aovel bold";
    font-size: 1.5em;
    transition: 0.2s ease-in;
    cursor: pointer;
  }
  .eliminate:hover {
    background: #060606;
    color: #e0dede;
  }

  .reauth {
    float: right;
    width: 60%;

    height: 100%;
    .inputs {
      font-size: 2em;
      transition: opacity 0.5s ease-in;
      margin-top: 20px;
      width: 100%;
      button {
        width: 50%;
      }
    }
  }
}

.rightbox {
  float: right;
  width: 80%;
  height: 100%;
}

.profile {
  transition: opacity 0.5s ease-in;
  margin-top: 20px;
  position: absolute;
  width: 100%;
}

h1 {
  font-family: $heading;
  color: $black;
  font-size: 1em;
  margin-top: 40px;
  margin-bottom: 35px;
}

h2 {
  color: $gray;
  font-family: $body;
  width: 80%;
  text-transform: uppercase;
  font-size: 0.5em;
  margin-top: 20px;
  letter-spacing: 1px;
  margin-left: 2px;
}

input {
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, $aqua, rgba($black, 0.5)) 1 0%;
  border-top: 0;
  width: 70%;
  font-family: $heading;
  font-size: 0.7em;
  padding: 7px 0;
  color: $black;
}
span {
  font-size: 0.5em;
  color: $gray;
}

.btn {
  font-family: $body;
  text-transform: uppercase;
  font-size: 0.6em;
  border: none;
  color: $aqua;
}

.btn:hover {
  text-decoration: underline;
  font-weight: 900;
}

input {
  font-family: $body;
  padding: 2px;
  margin: 0;
}

.privacy h2 {
  margin-top: 25px;
}

.settings h2 {
  margin-top: 25px;
}

.noshow {
  opacity: 0;
}
</style>
<script>
import { mapStores } from "pinia";
import titleVue from "../components/title.vue";
import { useAuthenticationStore } from "../firebase/authentication";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, db } from "../firebase/firebase";
import router from "../router";
import { doc, getDoc } from "@firebase/firestore";

export default {
  name: "profile",
  components: {
    titleVue,
  },
  data() {
    return {
      user: null,
      email: "",
      password: "",
      username: "",
      actualEmail: "",
      actualpassword: "",
      changeDisplay: false,
      changeBtn: true,
    };
  },
  computed: {
    ...mapStores(useAuthenticationStore),
    userIsLogged() {
      return this.authenticationStore.getUser() !== null;
    },
  },
  created() {
    onAuthStateChanged(auth, async (usuario) => {
      if (usuario != null) {
        const querySnapshot = await getDoc(doc(db, "users", usuario.uid));
        this.user = querySnapshot.data();
        this.email = this.user.email;
        this.username = this.user.username;
      } else {
        router.push({ name: "home" });
      }
    });
  },
  methods: {
    eliminateUser(e) {
      e.preventDefault();
      this.authenticationStore.eliminateUser();
    },
    updateUserInfo(e) {
      this.authenticationStore.updateUserInfo(this.email, this.username);
    },
    showlogin(e) {
      this.changeDisplay = !this.changeDisplay;
      this.changeBtn = true;
    },
    showloginPassword(e) {
      this.changeDisplay = !this.changeDisplay;
      this.changeBtn = false;
    },
    updateEmailInfo(e) {
      this.authenticationStore.updateEmailInfo(
        this.email,
        this.actualEmail,
        this.username,
        this.actualpassword
      );
    },
    ChangePassword(e) {
      this.authenticationStore.changePassword(
        this.actualEmail,
        this.actualpassword,
        this.password
      );
    },
  },
};
</script>
