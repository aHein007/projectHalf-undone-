<template>
  <h3>Add project  - you can save your own project</h3>
  <form @submit.prevent="submitProcess">
   <label>Project Title</label>
   <input type="text" placeholder="Enter your Project Title...." v-model="title">

   <label>Project Details</label>
   <input type="text" placeholder="Enter your Project Details...." v-model="detail">

   <div class="create">
        <button>Add</button>
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

    methods:{
        submitProcess(){
            let submitRoute =this.api 
            fetch(submitRoute,{method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:this.title,
                detail:this.detail,
                complete:false
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
</style>