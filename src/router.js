import { createWebHistory, createRouter } from "vue-router" 
import HomePage from "./views/AppHome.vue"
import RandomPage  from './views/about-page.vue';
import ProfilePage from "@/views/Profile-page.vue";


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
    },  
    {   
        path: "/Profile",
        name: "Profile",
        component: ProfilePage,
    }
]

const router = createRouter({   
history: createWebHistory(),  
 routes: links, 
})  

export default router
