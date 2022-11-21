/**
Made by Robert S 2022
 */

<template>
  <div class="top">
    <div class="text">
        <h1>Good, you're here for the free advice</h1>
        <p>They say advice is only worth as much as you paid for it, and this is true. </p>
        <p>That is why OUR advice comes at a premium -so that you KNOW you're getting value for money. And the best part is, the more you pay the better the value.</p>
        <p>Our consultants -the <em>Massive Cs</em> as we call them- are at this very moment working with all your competitors to improve their businesses, meaning that we have access to all the freshest industry data 
        and best practices we can copy to improve your business, as to your individual needs. </p>
        <p>And don't worry, we would of course never divulge <em>your</em> data to another client of ours.</p>
        
    </div>
    <div></div>
  </div>
  <div class="bottom">
    <div>
        <figure>
          <img class="adviceImage" src="../assets/were-awesome.jpg">
          <figcaption>Our Massive Cs on the job! So fun!</figcaption>
        </figure>
    </div>
    <div>
         <figure>
          <img class="adviceImage" src="../assets/workshops-yummy.jpg">
          <figcaption>Workshops! Let's do it!</figcaption>
        </figure>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>

h1 {
    font-size: larger;
}
.adviceImage{
    height: 12rem;
}
.bottom{
    display: flex;
    justify-content: center;
}
.top{
    display: flex;
    justify-content: center;
}
.text {
    width: 40%;
    text-align: left;
}

figcaption {
  color: rgb(100, 100, 100);
  
}


</style>