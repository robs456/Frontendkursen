<template>
    <div class="loginDiv">
        <form class="form" v-if="showLoginForm">
            <h1>{{loginTitle}}</h1>
            <input type="text" placeholder="Username" required v-model="name">
            <input type="password" placeholder="Password" required v-model="password" >
            <button class="button" @click.prevent="loginPressed">Log in</button>
            <p class="ali" v-if="alreadyLoggedIn">User is already logged in!</p>
        </form>
            
    </div>
</template>

<script>
    export default {
        props: ['alreadyLoggedIn', 'user', 'showLoginForm'],
        data(){
            return {
                loginTitle: 'Please Log in',
                name: '',
                password: '',

            }
            

        },
        methods: {
            loginPressed(){
                const userDeets = {name: this.name,
                    password: this.password}
                this.$emit('loginAttempt', {userDeets})
            },

        }   
    }
</script>

<style >
.button {
    border: 1px solid ;
    background: #eee;
    font-size: large;
    width: 4em;
    
}
form{
    display: flex;
    flex-direction: column;
    width: 25vw;
    justify-content: left;
    align-content: center;
    margin-top: 2em;
}

.loginDiv {
    display: flex;
    justify-content: center;

}

input {
    margin: .5em 0;
}

.ali{
    color: firebrick;
    margin-top: 6px;
}
</style>