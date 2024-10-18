<template>
    <div class="page">
        <h1>Welcome to the Page Component</h1>
    </div>
    <router-link to="/">
        <img src="../assets/logo.png" alt="" style="width: 100px;">
    </router-link>
</template>

<script>
export default {
    name: 'AboutPage',
}
</script>

<style scoped>
.page {
    text-align: center;
}
</style>