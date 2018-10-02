<template>
  <b-container>
    <b-row align-h="center">
        <b-col cols= "12">
          <div>
            <b-form >
             <b-form-group>
               <label for="inputUser" >User: </label>
               <b-form-input v-model="infoUser.user" id="inputUser" type="text" 
               required placeholder="Ingresa tu usuario ">
               </b-form-input>
             </b-form-group>
             <b-form-group>
             <label for="inputPass" >Password: </label>
               <b-form-input v-model="infoUser.password" id="inputPass" type="password" 
               required placeholder=" Ingresa tu contraseña ">
               </b-form-input>
             </b-form-group>
            </b-form>
          </div>
        </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="8">
        <b-col align-h="center">
        <b-button size="md" variant="info" @click="login" > Acceder </b-button>
        <b-button size="md" variant="success" @click="conGoogle"> Google </b-button>
        <b-button size="md" variant="primary" @click="conFace" > Facebook </b-button>
          <router-link tag="span" to="/singin"> 
           ¿No tienes cuenta?  <a> Crear una cuenta! </a>
          </router-link>
          <router-view></router-view>
        </b-col>
      </b-col>
    </b-row>
    <br>
  </b-container>
</template>

<style lang="sass" scoped>
  .container
    margin-top: 10%
</style>


<script>
import firebase from "firebase";
import { bus } from '../main.js'

export default {
  data() {
    return {
      infoUser: {
        user: '',
        password: "",
        userName: "",
        userEmail: "",
        userPhoto: "",
      }
    };
  },
  methods: {
    login() {
        // bus.$emit('cambioUser', this.infoUser)
      firebase
        .auth()
        .signInWithEmailAndPassword(this.infoUser.user, this.infoUser.password)
        .then(user => {
        // bus.$emit('cambioUser', this.infoUser)
          this.$router.replace("home"), error => console.log(error);
        });
    },
    conGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          const token = result.credential.accessToken;
          this.user = result.user;
          this.infoUser.userName = this.user.displayName;
          this.infoUser.userEmail = this.user.email;
          this.infoUser.userPhoto = this.user.photoURL;
          bus.$emit('cambioUser', this.infoUser)
          this.$router.replace("home"), error => console.log(error);
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const credential = error.credential;
          alert(error);
        });
          console.log(this.infoUser.userName);

    },
    conFace() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          const token = result.credential.accessToken;
          this.user = result.user;
          this.infoUser.userName = this.user.displayName;
          this.infoUser.userEmail = this.user.email;
          this.infoUser.userPhoto = this.user.photoURL;
          bus.$emit('cambioUser', this.infoUser)
          console.log(result)
          this.$router.replace("home"), error => console.log(error);
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const credential = error.credential;
          alert(error);
        });
    }
  }
};
</script>
