<template>
  <div class="about">
    <div class="top">
      <div class="blurb">
        <p><strong>Welcome to Massif Conseil!</strong><br> <br> We are probably the biggest consultancy you will ever deal with, which means a lot for the bottom line. <br> And for you as well! <br> Our consultants are ready to stand by your side to hand out advice gathered through generations of working with companies such as yours. <br> Try us today -your competitors do! 
        </p>
      </div>
      <div class="pich">
          <img class="mtg" src="../assets/Old-Men-Talking-small-flipped.jpg" alt="">
      </div>
    </div>
    <div class="divider"> <hr> </div>
    <div class="bottom">
      <div class="tresamigos">
        <figure>
          <img class="aboutImage" src="../assets/get-that-data.jpg">
          <figcaption>One way or another we'll get that data!</figcaption>
        </figure>
      </div>
      <div class="tresamigos">
        <figure>
          <img class="aboutImage" src="../assets/trust-us.jpg">
          <figcaption>Trust us! <br> We got this!</figcaption>
        </figure>
      </div>
      <div class="tresamigos">
        <figure> 
          <img class="aboutImage" src="../assets/the-general-idea.jpg">
          <figcaption>That's the spirit! <br> We don't take cards though.</figcaption>
        </figure>
      </div>
    </div>
      
  </div>
</template>

<style scoped>
.blurb{
  text-transform:none;
  min-width: 21rem;
  text-align: left;
  padding: 1em;
}

.mtg {
  height: 15rem;
}
.top{
  display: flex;
}

.bottom {
  display: flex;
  justify-content: center;
}
.tresamigos{ 
  padding: 1rem;
  margin: 1rem;
}

.aboutImage{
  height: 250px;
}

.divider hr {
  border-top: 2px solid rgb(97, 94, 255);
}

figcaption {
  width: 130px;
  color: rgb(100, 100, 100);
  
}
</style>

/**
Made by Robert S 2022
 */
