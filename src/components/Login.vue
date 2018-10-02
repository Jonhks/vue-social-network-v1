<template>
  <b-container class="container">
    <b-row align-h="center">
        <b-col cols= "8">
          <div>
            <b-form >
             <b-form-group>
               <label for="inputUser" >User: </label>
               <b-form-input v-model="user" id="inputUser" type="text" 
               required placeholder="Ingresa tu usuario ">
               </b-form-input>
             </b-form-group>
             <b-form-group>
             <label for="inputPass" >Password: </label>
               <b-form-input v-model="password" id="inputPass" type="password" 
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
import firebase from 'firebase'

export default {
  data () {
    return {
      user: '',
      password: ''
    }
  }, 
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.user, this.password)
      .then(user => {
        this.$router.replace('home'), (error) => console.log(error)
       })
    },
    conGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then(result =>{
        const token = result.credential.accessToken
        this.user = result.user 
        this.$router.replace('home'), (error) => console.log(error)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        const credential = error. credential
        alert(error)
      })
    },
    conFace() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(result=>{
          const token = result.credential.accessToken
          this.user = result.user
          console.log(this.user)
          this.$router.replace('home'), (error) => console.log(error)
        })
        .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        const credential = error. credential
        alert(error)
      })
    }
  }
}
</script>
