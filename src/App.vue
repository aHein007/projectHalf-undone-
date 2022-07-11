<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>


<script>
import NavBar from './components/NavBar'
export default {
  components: { 
    NavBar 
    },
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 400px;
  margin-bottom: 50px;
  color: #2c3e50;
}


</style>
