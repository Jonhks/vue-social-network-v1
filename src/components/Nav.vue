<template>
<b-navbar toggleable="lg" type="dark" variant="dark">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#">Social Network</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
  

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="#"> {{  user.userName  || user }}  </b-nav-item>
      <b-nav-item href="#">Profile</b-nav-item>
      <b-nav-item @click="logOut" href="#">Signout</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script>
import firebase from 'firebase'
import { bus } from '../main.js'

export default {
  data () {
    return {
      user: 'Usuario'
    }
  },
  methods: {
    logOut () {
      firebase.auth().signOut().then(() => this.$router.replace('login'))
    }
  },
  created () {
    bus.$on('cambioUser', data => {
      this.user = data
    })
  }
}
</script>


