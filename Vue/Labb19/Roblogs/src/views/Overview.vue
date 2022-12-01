<template>
    <div class="containerBlog"  v-if="!postClicked" @backClicked="backFrom" :postClicked="postClicked">
        <h1>All the wisdom laid before you:</h1>
        <div class="postList">
            <div class="blogPost" @click="postClicked = true" >
                <h2 class="title">title</h2>
                <p class="blogText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa...</p>
                <p class="readMore">Read more</p>
            </div>
            <div class="blogPost" @click="postClicked = true">
                <h2 class="title">title</h2>
                <p class="blogText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa...</p>
                <p class="readMore">Read more</p>
            </div> 
        </div>

    </div>
    <Deetview v-if="postClicked" />
    <!-- <Deetview  /> -->
    <!-- <div><h1>All the wisdom laid before you:</h1></div> -->
</template>

<script>
    import Deetview from '../components/Deetview.vue'
    export default {
        components: {Deetview},
        data(){
            return{
                postClicked: false
            }
        },
        methods: {
            backFrom(d){
                this.postClicked = d
            }
        }
        
            }
</script>

<style  >
.containerBlog {
  width: 100vw;
  background-color: rgb(182, 55, 55);
   display: flex;
  /* flex-direction: column; */
  justify-content: center;
}

.blogPost{
  background-color: whitesmoke;
  margin-bottom: 1.5rem;
  /* width: 50vw; */
  padding: .05em 1em .05em 1em;
  
}

.postList{
  width: 100%; 
  display: flex;
  /* flex-direction: column; */
  justify-content: center; 
   
  
}

h1{
    color: white;
    text-shadow: rgba(17, 17, 17, 0.719) 2px 2px 5px ;
    font-weight: bold;
}


.readMore{
    color: gray;
    cursor: pointer;
}

</style>