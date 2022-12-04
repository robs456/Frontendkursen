<template>
    <div class="containerBlog">
        <h1>Write new post:</h1>
        <form class="form">
            <input class="formField" type="text" name="title" placeholder="Title" required v-model="title" >
            <textarea class="formField" name="area" placeholder="Write post here!" rows="40" cols="80" required v-model="text"></textarea>
        </form>
        <p class="createButton" @click="updateDB">Create new post</p>
       
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: '',
                text: '',
            }
        },
        methods: {
            async updateDB(){
                
                if(this.title === '' || this.text === ''){
                    console.log('Fields cannot be empty')
                    return
                }
                

                const res = await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {
                'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    title : this.title,
                    text : this.text,
                    id : Date.now(),
                    dateWritten : new Date().toLocaleDateString('sv-SE')        
                
                })


                });   

                console.log(res.status)
                if (res.status !== 201){
                console.log('Something went wrong with DB updating!');
                return;
                }




            }
        }
    }
</script>

<style  >
.form{
    padding: .05em 0em .05em 0em;
    width: 100%;
    margin: 0 auto;
    display: flex;
  justify-content: center;
  flex-direction: column;
  
  
  justify-content: center; 
}
.formField{
    padding: .05em 0.25em .05em 0.25em;
    width: 50vw;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 auto;
     margin-bottom: 0.5rem;
}

.createButton{
    background-color: #777;
    width: fit-content;
    border: 1px solid rgb(90, 90, 90);
    margin: auto;
    padding: .2em 0.35em .2em 0.35em;
    color: #fff;
    box-shadow:  rgba(17, 17, 17, 0.520) 2px 2px 5px ;
    cursor: pointer;
}
</style>