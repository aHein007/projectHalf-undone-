<template>
  <div class="home">
   <h3>Hello!This is your home page and thank you for using our apk</h3>
   <div  v-for="job in jobs" :key="job.id">
    <SingleProject :oneJob="job" @deleteUi="deleteProjectUI" @changeComplete="complete"></SingleProject >
   </div>
  
  </div>
</template>

<script>

import SingleProject from '../components/SingleProject'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    SingleProject,
    
  },

  data(){
    return{
      api:"http://localhost:3000/jobs/",
      jobs:[],
      
    }
  },

methods:{
  deleteProjectUI(id){
    this.jobs =this.jobs.filter((job)=>{
      return job.id !=id
    })
  },

  complete(id){
    let findProject =this.jobs.find((job)=>{
      return job.id==id
    })
    findProject.complete =!findProject.complete
    
  }
},

  mounted(){
    fetch(this.api).then((response)=>{
      return response.json();
    }).then((data)=>{
      this.jobs =data
    }).catch((err)=>{
      console.log(err)
    })
  }
}
</script>
