import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProject from "../views/AddProject.vue"
import AboutUs from "../views/AboutUs.vue"
import ContactUs from "../views/ContactUs.vue"
import LogOut from "../views/LogOut.vue"
import EditPage from "../views/EditPage.vue"
import NotFound from "../views/NotFound.vue"  

const routes = [
  {
    path: '/', 
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path:"/AddProject",
    name:"addProject",
    component:AddProject
  },

  {
    path:"/AboutUs",
    name:"aboutus",
    component:AboutUs
  },

  {
    path:"/contactus",
    name:"contactus",
    component:ContactUs
  },

  {
    path:"/logout",
    name:"logout",
    component:LogOut
  },

  {
    path:"/editPage/:id",
    name:"editPage",
    component:EditPage,
    props:true
  },

  {
    path:"/:catchAll(.*)",
    name:"notFound",
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
