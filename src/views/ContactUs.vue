<template>
  <form @submit.prevent="saveFrom">
   <label>Name</label>
   <input type="text" placeholder="Enter your Name...." v-model="name">

   <label>Email</label>
   <input type="email" placeholder="Enter you Email...." v-model="email">

   <label>About</label>
   <input type="text" placeholder="Enter you Address...." v-model="about">

   <div class="center">
    <input type="checkbox" required>
    <label for="">ACCPET TERN AND CONDATION</label>
   </div>

   <div class="create">
        <button>Contact Us</button>
   </div>
  </form>
</template>

<script>
export default {
    data(){
        return{
            name:"",
            email:"",
            
            about:"",
            api:"http://localhost:3000/contacts/"
        }
    },

    methods:{
        saveFrom(){
           fetch(this.api,{method:"POST",
            headers:{
                "Content-Type" :"application/json"
            },

            body:JSON.stringify({
                name:this.name,
                email:this.email,
                about:this.about
            })
           }).then(()=>{
             this.$router.push({name:"aboutus"})
           }).catch((err)=>{
            console.log(err)
           })
        }
    }
}
</script>

<style>
form{
    max-width: 420px;
   background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label{
    color:#aaa;
    display: inline-block;
    margin:25px 0 15px;
    font-size:0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input,select {
    display: block;
    padding:10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin:0px 10px;
    top:2px ;    
    position: relative;
}

.create{
   display: flex;
   justify-content: center;
   align-items: center;
  
}
button{
margin-top: 20px;
background-color: aqua;
text-align: center;
padding: 15px;
border-radius: 4px;
user-select: none;
cursor:pointer;
border: none;

}

.center{
    text-align: center;
}
</style>