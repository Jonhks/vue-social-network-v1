<template>
<b-container class="mensajes">
  <b-row align-h="center">
     <div class="container">
       <b-form-textarea id="textarea1" v-model="text" placeholder="Ingresa tu mensaje" :rows="3" :max-rows="6">
      </b-form-textarea>
     </div>
  </b-row>
     <button type="button" class="btn btn-dark btn-lg btn-block">Enviar </button>
</b-container>
</template>


<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  margin-top: 3%
button
  margin-top: 1%
button:hover
  cursor: pointer
</style>

