<template>
  <section>
    <button @click.prevent="logOut" >logout</button>
    <div class="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div class="signup">
        <form>
          <label for="chk" aria-hidden="true">Sign up</label>
          <input
            type="text"
            id="nameSignUp"
            name="txt"
            placeholder="User name"
            required="true"
            v-model="username"
          />
          <input
            type="email"
            id="emailSignUp"
            name="email"
            placeholder="Email"
            required="true"
            v-model="email"
          />
          <input
            type="password"
            name="pswd"
            id="passwordSignUp"
            placeholder="Password"
            required="true"
            v-model="password"
          />
          <button @click.prevent="signUp">Sign up</button>
        </form>
      </div>

      <div class="login">
        <form>
          <label for="chk" aria-hidden="true">Login</label>
          <input
            type="email"
            name="email"
            id="userSignIn"
            placeholder="Email"
            required="true"
          />
          <input
            type="password"
            name="pswd"
            id="pswdSignIn"
            placeholder="Password"
            required="true"
          />
          <button @click.prevent="signIn">Login</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapStores } from "pinia";
import { useAuthenticationStore } from "../firebase/authentication";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
  computed: {
    ...mapStores(useAuthenticationStore),
    userIsLogged() {
      
      return this.authenticationStore.getUser() !== null;
    },
  },
  methods: {
signIn(e){
  e.preventDefault();
  this.authenticationStore.signIn(this.email, this.password)
},
signUp(e){
  this.authenticationStore.signUp(this.email, this.password, this.username);
},
logOut(e){
  this.authenticationStore.logOut()
}
  }
};
</script>

<style lang="scss">
section {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 50px;
  .main {
    width: 40%;
    height: 500px;
    background: red;
    overflow: hidden;
    background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38")
      no-repeat center/ cover;
    border-radius: 10px;
    border: 2px solid black;
  }
  .signup {
    position: relative;
    width: 100%;
    height: 100%;
  }
  label {
    color: rgb(21, 19, 19);
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-family: "sansation";
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
  input {
    width: 60%;
    height: 50px;
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    font-family: "Sansation Bold";
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  button {
    width: 60%;
    height: 50px;
    margin: 10px auto;
    display: block;
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
  button:hover {
    background: #060606;
    color: #e0dede;
  }
  .login {
    height: 460px;
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(-200px);
    transition: 0.8s ease-in-out;
  }
  .login label {
    color: #131315;
    padding-top: 20px;
    transform: scale(0.6);
  }
}

#chk {
  display: none;
}

#chk:checked ~ .login {
  transform: translateY(-550px);
}
#chk:checked ~ .login label {
  transform: scale(1);
}
#chk:checked ~ .signup label {
  transform: scale(0.6);
}
</style>