<template>
  <b-container class="container">
    <b-row align-h="center">
        <b-col cols= "8">
          <div>
            <b-form >
             <b-form-group>
               <label for="inputUser" >User: </label>
               <b-form-input id="inputUser" type="text" 
               required placeholder="Ingresa tu usuario ">
               </b-form-input>
             </b-form-group>
               <b-form-group>
               <label for="inputEmail" >Email: </label>
               <b-form-input v-model="user" id="inputEmail" type="text" 
               required placeholder="Ingresa tu correo ">
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
        <b-button size="md" variant="info" @click="signIn" > Crear </b-button>
          <router-link tag="span" to="/login"> 
          ¿ Ya tienes cuenta?  <a> Ingresa! </a>
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
    signIn () {
      firebase.auth().createUserWithEmailAndPassword(this.user, this.password)
      .then(user => {
        this.$router.replace('home'),
        (error) => alert(error)
      })
   }
  }
}
</script>