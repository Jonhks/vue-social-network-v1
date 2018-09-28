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
             <label for="inputPass" >Password: </label>
               <b-form-input id="inputPass" type="password" 
               required placeholder=" Ingresa tu contraseña ">
               </b-form-input>
             </b-form-group>
            </b-form>
          </div>
        </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="6">
        <b-col align-h="center">
        <b-button size="md" variant="info"> Acceder </b-button>
        <b-button size="md" variant="success"> Google </b-button>
        <b-button size="md" variant="primary"> Facebook </b-button>
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
