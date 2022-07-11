<template>
    <nav>
        <router-link to="/">Home</router-link> 
        <router-link :to="{name:'addProject'}">Add Project</router-link>
        <router-link :to="{name:'aboutus'}">About Us</router-link>
        <router-link :to="{name:'contactus'}">Contact Us</router-link>
        <router-link :to="{name:'logout'}">Log out</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
nav {
  padding: 30px;
   background-color:grey;
   width: 460px;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
 margin-left: 20px;
}

nav a.router-link-exact-active {
  margin-left: 10px;
  padding: 5px;
  border-radius: 3px;
  color: white;
}
</style>