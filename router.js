import { createWebHistory, createRouter } from "vue-router" 
import HomePage from "./src/components/AppHome.vue"
import RandomPage  from './src/components/about-page.vue';


const links = [
{
path: "/",     
name: "Home",     
component: HomePage,
},
{
path: "/about",     
name: "RanomPage",     
component: RandomPage,
}
]

const router = createRouter({   
history: createWebHistory(),  
 routes: links, 
})  

export default router
