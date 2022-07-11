<template>
   <div v-if="show">
        <div class="backdrop">
            <div class="modal">
                <h3>Are you sure want to Log out</h3>
                <span @click="cancel">cancel</span>
                <span @click="success">ok</span>
               
            </div>
        </div>
    </div>

    <div v-if="show1">
        <div class="backdrop" @click.self="hideBlock">
            <div class="modal" :class="{greenColor:show1==true}">
                <h3>Log out Success!</h3>
                Good Bye
               
            </div>
        </div>
    </div>

   
</template>

<script>
export default {
    data(){
        return{
          show:true,
          show1:false
          
        }
    },

    methods:{
       cancel(){
        this.show=false 
        this.$router.push({name:"home"})
       },

       success(){
            this.show=false
            this.show1=true
        },

       hideBlock(){
        this.show1=false
        this.$router.push({name:"contactus"})
       }

    },

   

    
}
</script>

<style scoped>
.backdrop{
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

.modal{
    z-index: inherit;
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background-color: crimson;
    color: white;
    border-radius: 10px;
    user-select: none;
}

span{
    margin-right: 10px;
    color: black;
    cursor: pointer;
}
.greenColor{
    background-color: green;
}
</style>