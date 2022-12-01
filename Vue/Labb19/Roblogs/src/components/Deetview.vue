<template>
    <div class=".container" >
        <h1 class="back" @click="$emit('backClicked', false)">BACK</h1>
       
        <div class="blogPost" >
            <h2 class="title">title</h2>
            <p class="blogText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa...</p>
            
        </div>
       

    </div>
   
</template>

<script>
      export default {
        
            }
</script>

<style  scoped>

h1{
    color: white;
    text-shadow: rgba(17, 17, 17, 0.719) 2px 2px 5px ;
    font-weight: bold;
    cursor: pointer;
}

.readMore{
    color: gray;
    cursor: pointer;
}

</style>