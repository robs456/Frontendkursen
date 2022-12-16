<script setup>

</script>

<template>
  <div class="hero ">
    <div class="welcome logotype">
      <h1 class="logotype herotext">Welcome to </h1>
      <h1 class="logotype herotext">Artisan Made Coffee Machines</h1>
            
    </div>
  </div>
</template>

<style scoped>
 .hero {
  background-image: url('../assets/images/coffee-hero-2.jpg');
   background-size: cover;
   height:100vh;
   width: 100vw;
   color: blanchedalmond;
 }
 .welcome {
   position: relative;
   top:  15%;
   left: 15%;
 }

 .herotext {
  text-shadow: 3px 3px 3px black, -3px -3px 3px black, 4px 4px 5px wheat   ;
  transform: rotate(-15deg);
 }

</style>