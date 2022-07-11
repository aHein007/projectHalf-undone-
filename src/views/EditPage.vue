<template>
  <h3>Update Project  - you can update your own project & this is your project - {{ id }}</h3>
  <form @submit.prevent="">
   <label>Update Project Title </label>
   <input type="text" placeholder="Enter your new Project Title...." v-model="title">

   <label>Update Project Details</label>
   <input type="text" placeholder="Enter your new Project Details...." v-model="detail">

   <div class="create">
        <button @click="updateForm">Update</button>
   </div>
  </form>
</template>

<script>
export default {
  data(){
    return{
      title:"",
      detail:"",
     
      api:"http://localhost:3000/jobs/"
    }
  },
  props:[
    "id"
  ],

  mounted(){
    fetch(this.api +this.id).then((response)=>{
      return response.json()
    }).then((data)=>{
      this.title=data.title;
      this.detail=data.detail
    }).catch((err)=>{
      console.log(err);
    })
  },

  methods:{
    updateForm(){
      fetch(this.api+this.id,{method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          title:this.title,
          detail:this.detail
        })
          
        
      }).then(()=>{
        this.$router.push("/")
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<style>


</style>