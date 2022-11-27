<template>
    <Navbar :user="user" @showForm="this.showLoginForm = true" @logOut="handleLogout"/>
            
    <LoginForm @loginAttempt="handleLogin" :alreadyLoggedIn="alreadyLoggedIn" :user="user" :showLoginForm="showLoginForm" />
    <div>

    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import LoginForm from './components/LoginForm.vue'
    export default {
       components: {Navbar, LoginForm},
       data(){
        return {
            user: {
                name: '',
                password: '',
                loggedIn: false
            },
            alreadyLoggedIn: false,
            showLoginForm: false,
        }
       },
       methods:{
            handleLogin(e){
                this.alreadyLoggedIn = false
                if (this.user.name !== '' && this.user.name === e.userDeets.name && this.user.loggedIn === true) {
                    return this.alreadyLoggedIn = true
                }
                this.user.name = e.userDeets.name
                this.user.password = e.userDeets.password
                this.user.loggedIn = true
                this.showLoginForm = false
                
            },
            handleLogout(){
                this.user.name = ''
                this.user.password = ''
                this.user.loggedIn = false
            }
       },
    }
</script>

<style scoped>


</style>