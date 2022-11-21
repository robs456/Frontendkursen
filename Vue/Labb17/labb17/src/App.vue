<template>
      
  <nav>

    <div class="smlogo">
      <img src="./assets/Massif-C-small.png" alt="Massif C logo" >
    </div>
    <ul class="links, navButton">
      <li class="navItems"> <router-link to="/">Home</router-link></li>
      <li class="navItems"> <router-link to="/advice">Advice</router-link></li>
      <li class="navItems"><router-link to="/about">About</router-link></li>
    </ul>
   
   
    
  </nav>
       
  <router-view/>
  <Footer/>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {Footer}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
.links {
  list-style-type: none;
  
  
}

.navItems {
  display: inline-block;
  margin: 0 1em;
  
}

nav {
  padding: 10px;
  background:  rgb(97, 94, 255);
  margin-bottom: 2em;
  margin-top: 1em;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(238, 238, 238);
  font-size: large;
}
.smlogo{
  position: absolute;
   left: 5em;
  top: 2.33em;
}
.smlogo img{
  height: 2em;
}

</style>

/**
Made by Robert S 2022
 */
