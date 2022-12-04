<template>
    
    <div class="containerBlog"  v-if="!postClicked" >
        <h1>All the wisdom laid before you:</h1>
        <div class="postList">
            <div class="blogPost" v-for="post in posts" @click="prepareDeets(post)" :key="post.id">
                <h2 class="title">{{ post.title }}</h2>
                <p class="blogText">{{ post.text.substring(0, 100) }}...</p>
                <p class="readMore">Read more </p>
            </div>
            
        </div>

    </div>
    <Deetview v-if="postClicked" @backClicked="backFrom" :title="this.title" :text="this.text"/>
    
</template>

<script>
    import Deetview from '../components/Deetview.vue'
    export default {
        components: {Deetview},
        data(){
            return{
                postClicked: false,
                posts: [],
                title: [],
                text: []
            }
        },
        methods: {
            backFrom(){
                this.postClicked = false
            },
            prepareDeets(post){
            
            this.title=post.title
            this.text=post.text
            this.postClicked = true

        }
        },
        async mounted(){
            const res = await fetch("http://localhost:3000/posts");
            this.posts = await res.json();
        },
        
        
        }
</script>

<style  >
.containerBlog {
  width: 100vw;
  background-color: #aaa;
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
  overflow-wrap: anywhere;
}

.postList{
  width: 100%; 
  display: flex;
  margin:  0 auto;
  flex-direction: column;
  justify-content: center; 
   
  
}



.readMore{
    color: gray;
    cursor: pointer;
}

</style>