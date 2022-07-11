<template>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Sapiente voluptatibus ab aut harum sint iure nemo animi ipsam, 
    nobis et, praesentium asperiores reprehenderit aspernatur 
    consequatur odio porro iusto, itaque laboriosam?</p>
    <h3>This sever side from Contact us Page</h3>
  <div v-for="contact in contacts" :key="contact.id">
    
    <label >Name</label> <br>
        {{ contact.name }} <br>
    <label>Eamil</label> <br>
        {{ contact.email }} <br>
    <label >About</label> <br>
        {{ contact.about }}
        <hr>
  </div>

</template>

<script>
export default {
    data(){
        return{
            api:"http://localhost:3000/contacts/",
            contacts:[]
        }
    },
    mounted(){
        fetch(this.api).then((response)=>{
            return response.json()
        }).then((data)=>{
           this.contacts =data
          
        }).catch((err)=>{
            console.log(err)
        })
    }
}
</script>

<style>
p{
    max-width: 500px;
}
</style>