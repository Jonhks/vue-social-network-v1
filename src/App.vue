<template>
  <div id="app">
    <j-nav></j-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import jNav from './components/Nav.vue'



export default {
  name: 'app',
  components: { jNav },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

*{ 
  background: black;
  color: white;
}
</style>
