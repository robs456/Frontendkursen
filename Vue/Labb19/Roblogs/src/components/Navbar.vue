<template>
    <div class="container">
        <nav class="navbar">
            <div class="logo">
                <P class="logotype">Roblogs</P>
            </div>
            <ul class="navmenu">
                <li class="menuItem"><RouterLink to="/">Overview</RouterLink></li>
                <li class="menuItem"><RouterLink to="/newPost">Editing</RouterLink></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
    export default {
        
    }
</script>

<style >

.container {
    position: relative;
}

.logotype{
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.5em;
    color: white;
    text-shadow: rgba(17, 17, 17, 0.719) 3px 3px 5px ;
    font-weight: bold;
    margin-left: 5rem;
}
.navbar{
    background-color: #aaa;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navmenu{
    list-style:none;
    text-decoration: none;
    display: flex;
    margin-right: 5rem;
}

.menuItem{
    margin: 0 1em;
    font-size: large;

}
</style>