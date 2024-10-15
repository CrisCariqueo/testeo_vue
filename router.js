import { createWebHistory, createRouter } from "vue-router" 
import HomePage from "./src/components/AppHome.vue"
import RandomPage  from './src/components/about-page.vue';
import ProfilePage from "@/components/Profile-page.vue";


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
