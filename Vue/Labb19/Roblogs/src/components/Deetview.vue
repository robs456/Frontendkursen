<template>
    <div class="containerBlog" >
        <h1 class="back" @click="goBack">BACK</h1>
       
        <div class="blogPost" >
            <h2 class="title">{{ title }}</h2>
            <p class="blogText">{{ text }}</p>
            
        </div>
       

    </div>
   
</template>

<script>
      export default {
        props: ['title', 'text'],
        methods: {
            goBack(){
                this.$emit('backClicked')
            }
        }
            }
</script>

<style  scoped>

h1{
   cursor: pointer;
}

.readMore{
    color: gray;
    cursor: pointer;
}

.back{
    margin: 1rem auto;
    cursor: pointer;
}
</style>