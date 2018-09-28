<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>Subtitulo que no es componente</h2>
    <span>Esto es un input de nombre</span>
    <input name="nombre" type="text" placeholder="ingresa tu nombre" v-model="nombreObtenido">
    <p> Tu nombre es : {{ nombreObtenido }} </p>
    <span>El input de tu apellido</span>
    <input type="text" name="apellido" placeholder="Ingresa tu apellido" v-model="apellidoObtenido">
    <p>Tu apellido es: {{ apellidoObtenido }} </p>
    <p>Tu nombre completo es {{ nombreObtenido }} {{ apellidoObtenido }} </p>
    <input type="number" name="edad" v-model="edad">
    <p>Tu edad es : {{ edad }}</p>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nombreObtenido: '',
      apellidoObtenido: '',
      edad: ''
    }
  }
}
</script>

<style lang="scss">



</style>
