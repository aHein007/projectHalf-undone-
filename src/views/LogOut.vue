<template>
    <div v-if="showModal">
        <ModalLogout ></ModalLogout>
    </div>

    
</template>

<script>
import ModalLogout from "../components/ModalLogout.vue"
export default {
  components:{
    ModalLogout
  },
  data(){
    return{
       showModal:true,
      
    }
  },

  methods:{ 
   
  },
    
  

}
</script>

<style>



</style>