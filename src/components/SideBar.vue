<template>
    <input type="checkbox" id="sidebar-click">
        <label class="sidebar" for="sidebar-click">
            <ul>
                <li><a href="library.html" class="sidebar-button"><img src="../assets/sidebar-icons/library-icon.png" alt="Libreria"><h1>Libreria</h1></a></li>
                <li><a href="inventory.html" class="sidebar-button"><img src="../assets/sidebar-icons/inventory-icon.png" alt=""><h1>Inventario</h1></a></li>
                <li><a href="forum.html" class="sidebar-button"><img src="../assets/sidebar-icons/forum-icon.png" alt=""><h1>Foro</h1></a></li>
                <li><a href="rules.html" class="sidebar-button"><img src="../assets/sidebar-icons/rules-icon.png" alt=""><h1>Reglas</h1></a></li>
                <li><a href="glossary.html" class="sidebar-button"><img src="../assets/sidebar-icons/glossary-icon.png" alt=""><h1>Glosario</h1></a></li>
            </ul>

            <a href="profile.html" class="sidebar-button active"><img src="../assets/sidebar-icons/profile-icon.png" alt=""><h1>Perfil</h1></a>
    </label>
</template>

<script>

</script>

<style>
    .sidebar {
        z-index: 10;
        display: block;
        width: 123px;
        background-color: #2C2C2E;
        height: 94vh;
        display: flex;
        position: fixed;
        float: left;
        top: 0px;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        padding: 20px 0;
        transition: 1s;
        border-right: 5px solid #E3CFCF;
    }
    :checked + .sidebar {
        transition: 1s;
        width: 300px;
    }
    #sidebar-click {
        display: none;
    }

    .sidebar ul {
        list-style: none;
        padding-left: 0;
        height: fit-content;
    }

    .sidebar ul li {
        width: 63px;
        height: 44.2px;
        margin-bottom: 40px;
    }

    .sidebar h1 {
        position: relative;
        left: 130px;
        top: -70px;
        color: #E3CFCF;
    }

    .sidebar ul li a {
        height: 44px;
    }

    .sidebar ul li a img {
        width: auto;
        height: auto;
        right: 0px;
    }

    .sidebar a {
        height: 44.2px;
        padding-left: 27px;
    }

    .sidebar-button {
        position: relative;
        text-decoration: none;
    }

    .sidebar-button.active img{
        border-left: 5px solid #A40000;
    }

    .sidebar-button img:hover{
        filter: brightness(125%);
    }

</style>