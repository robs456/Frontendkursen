<template>
    <div class="invisibleListener" @backClicked="backFrom">jjj</div>
    <div class="containerBlog"  v-if="!postClicked" >
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
            backFrom(){
                console.log('am back')
                this.postClicked = false
            }
        }
        
            }
</script>

<style  >
.containerBlog {
  width: 100vw;
  background-color: rgb(182, 55, 55);
  display: flex;
  justify-content: center;
  flex-direction: column;

}

.blogPost{
  background-color: whitesmoke;
  width: 50vw;
  padding: .05em 1em .05em 1em;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  
}

.postList{
  width: 100%; 
  display: flex;
  margin:  0 auto;
  flex-direction: column;
  justify-content: center; 
   
  
}

h1{
    color: white;
    text-shadow: rgba(17, 17, 17, 0.719) 2px 2px 5px ;
    font-weight: bold;
    margin: 1rem auto;
}


.readMore{
    color: gray;
    cursor: pointer;
}

</style>