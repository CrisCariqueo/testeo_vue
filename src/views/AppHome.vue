<template>
    <aside>
        <SideBar />
    </aside>
    <div>
        <h1>Welcome to the Home Page</h1>
    </div>
    <button>
        <router-link to="/about">Go to About Page</router-link>
    </button>
</template>

<script setup>
import SideBar from '../common/SideBar.vue';


</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>