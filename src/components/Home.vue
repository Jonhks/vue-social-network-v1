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
import firebase from "firebase";
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    enviarDb() {
      const firestore = firebase.firestore();
      let date = new Date();
      db.collection("mensajes")
        .add({
          nameUser: "Javis",
          last: "Lovelace",
          mensaje: this.text,
          date: date
        })
        .then(function(docRef) {
          console.log("Este es el ID del documento del mensaje: ", docRef.id);
          db.collection("mensajes")
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                console.log(`${doc.id} => ${doc.data().mensaje}, ${doc.data().date}`);
              });
            });
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
        this.text= ''
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


