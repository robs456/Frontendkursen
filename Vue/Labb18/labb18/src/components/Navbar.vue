<template>
    <header class="header">
        <div class="logo">
            <p><em>Labb 18</em></p>
        </div>
        <div class="navbar">
        <ul class="menu" v-if="!user.loggedIn">
            <li class="menuItem" @click="this.$emit('showForm')" >Please Log in </li>
        </ul>
        <ul class="menu" v-if="user.loggedIn">
            <li class="menuItem">{{user.name}}</li>
            <li class="menuItem" @click="this.$emit('logOut')">Log out</li>
        </ul>

        </div>
    </header>
    
</template>

<script>
    export default {
        props: ['user'],
        data(){
            return{
                
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
header {
    margin-top: 1em;
    display:flex;
    justify-content: space-between;
}
.logo{
    font-family: 'Changa', sans-serif;
    font-size: 2em;
    color: red;
    padding-left: 1em;
    text-shadow: 3px 3px 3px rgb(255,0,170,0.3)
}

.menu {
  list-style-type: none;
  
  
}

.menuItem {
  display: inline-block;
  margin: 0 1em;
  padding: 0.5em;
  background-color: #ddd;
  border-radius: .75em;
  font-weight: bold;
  
}

.menuItem a{
 text-decoration: none;
  
}
</style>