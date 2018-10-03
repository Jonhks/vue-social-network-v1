<template>
<b-container class="mensajes">
  <b-row align-h="center">
     <div class="container">
       <b-form-textarea id="textarea1" v-model="text" placeholder="Ingresa tu mensaje" :rows="1" :max-rows="6">
      </b-form-textarea>
     </div>
  </b-row>
     <b-button type="button" class="btn btn-dark btn-lg btn-block" @click="enviarDb">Enviar </b-button>
</b-container>
</template>


<script>
import { db } from "../main.js";
import firebase from 'firebase'
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    enviarDb() {
      console.log(this.text)
      const firestore = firebase.firestore();
      let date = new Date()
      db.collection("mensajes")
        .add({
          user: "jonh",
          last: "Lovelace",
          mensaje: this.text,
          date: date
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }
  }
};
</script>

<style lang="sass" scoped>
.container
  margin-top: 3%
button
  margin-top: 1%
button:hover
  cursor: pointer
</style>


// db.collection("mensajes").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });