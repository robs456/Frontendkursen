<template>
  <div class="home">
      <div class="hlogo">
       <img src="../assets/Massif-C-step.png" alt="Massif C stepped logo" >
      </div>
      
      <div class="cta">
      <router-link to="/advice">Click here for your free advice!</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
<style >


.home {
   background-image: url('../assets/Hero-skyscrapers.jpg');
   background-size: cover;
   height:60vh;
   width: 100vw;
   font-family: 'Montserrat', sans-serif;
   color: white;
   display: grid;
   grid-template-columns: 10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw 20vw;
   grid-template-rows: 5vh 10vh 10vh 10vh 20vh 15vh;
}

.hlogo {
  grid-column-start: 2;
  grid-row-start: 2;
  width: 21rem;
}


.cta a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  background:  rgb(97, 94, 255);
  padding: 0.75em;
  border-radius: 1.5em;
}

.cta{
  grid-column-start: 6;
  grid-row-start: 5;
  width: 21em;
}

</style>

/**
Made by Robert S 2022
 */
