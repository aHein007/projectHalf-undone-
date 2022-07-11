<template>
    
    <div class="project" :class="{green:this.oneJob.complete}" >
        <div class="flexing">
            <div>
                <h3  @click="showDetail=!showDetail">{{ oneJob.title }}</h3>
            </div>

            <div class="spacing">
                <i class="fa-solid fa-trash" @click="deleteProject"></i>
                <router-link :to="{name:'editPage',params:{id:oneJob.id}}">
                    <i class="fa-solid fa-edit"></i> 
                </router-link>
                
                <span v-if="oneJob.complete==false" :class="{success:oneJob.complete==false}">
                    <i class="fa-solid fa-check" @click="checkProject" ></i>
                </span>
               
               <span v-else-if="oneJob.complete==true" >
                    <i class="fa-solid fa-xmark"  @click="checkProject" :class="{unsuccess:oneJob.complete==true}"></i>
                </span>
            </div>
        </div>
        <p v-if="showDetail">{{ oneJob.detail }}</p>
        
    </div>
   
      
</template>

<script>
export default {
    props:[
        "oneJob"
    ],
    
    data(){
        return{
            showDetail:false,
            api:"http://localhost:3000/jobs/",
            showMark:false
        }
    },

    methods:{
       deleteProject(){
            let deleteRoute=this.api +this.oneJob.id
            fetch(deleteRoute,{method:"DELETE"}).then(()=>{
                this.$emit("deleteUi",this.oneJob.id);
            }).catch((err)=>{
                console.log(err);
            })
       },

       checkProject(){
            let completeRoute =this.api + this.oneJob.id
            fetch(completeRoute,{method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    complete:!this.oneJob.complete,
                })

                
            }).then(()=>{
                this.$emit("changeComplete",this.oneJob.id)
            }).catch((err)=>{
                console.log(err)
            })
           this.showMark=!this.showMark
       }
    }
}
</script>

<style scoped>
.project{
    padding: 20px;
    background-color: #f2f2f2;
    border-left: 5px solid crimson;
    margin: 10px;
    user-select: none;
    border-radius: 6px;
    width: 500px;
    height: 100%;
  box-shadow: inset 0 0 0 0 red;
  
  padding: 0 .30rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}

.project:hover{
    box-shadow: inset 510px 0 0 0 crimson;
    color: white;
}
.flexing{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

i{
    margin-right: 8px;
    cursor: pointer;
}

.spacing{
    margin-right: 10px;
    font-size: 17px;
}

h3{
   
    user-select: none;
    cursor: pointer;
}


i:hover{
    color: #777;
}

.green{
    border-left: 5px solid green;
    box-shadow: inset 0 0 0 0 lightgreen;
  
  padding: 0 .30rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}
.green:hover{
box-shadow: inset 510px 0 0 0 green;
    color: white;
}

p{
    padding: 20px;
}

.success{
    color: green;
}

.unsuccess{
    color: crimson;
}

 a{
 color: black;
}
</style>