<template>
    <div class="access">
        <h2>{{ TitleText }}</h2>
        <div class="login" v-show="HasAccount">
            <h3>User</h3>
            <input type="text" />
            <h3>Password</h3>
            <input type="email" />
            <button class="LogginIn" @click="OnLogIn()">Log In</button>
        </div>
        <div class="register" v-show="DosentHasAccount">
            <h3>User</h3>
            <input type="text" />
            <h3>Email</h3>
            <input type="email" />
            <h3>Password</h3>
            <input type="email" />
            <button class="RegisterIn" @click="OnRegister()">Register Account</button>
        </div>
        
        <button class="change" @click="OnChange()">{{ ButtonText }}</button>
        <button class="LogOut" @click="OnLogOut()" v-show="logout">Logout</button>
    </div>
</template>

<script setup lang="ts">

    import { ref } from "vue";

    const logout = ref(false);

    const TitleText = ref('Log In');
    const HasAccount = ref(true);
    const DosentHasAccount = ref(false);
    const ButtonText = ref('No account yet?');

    function OnChange() {
        if (HasAccount) {
            HasAccount.value = !HasAccount.value;
            DosentHasAccount.value = !HasAccount.value;
        }

        if (TitleText.value == 'Log In') {
            TitleText.value = 'Register'
            ButtonText.value = 'Already got an account?'
        } else {
            TitleText.value = 'Log In'
            ButtonText.value = 'No account yet?'
        }

        console.log(HasAccount.value);
    }

    function OnLogOut() {
        if (logout) {
            logout.value = !logout.value
        }
    }

    function OnLogIn() {
        if (!LogOut) {
            logout.value = !logout.value
        }
    }

    function OnRegister() {
        if (!LogOut) {
            logout.value = !logout.value
        }
    }

</script>

<style scoped>

    .access {
        margin-left:37.5%;
        display: felx-grid;
        text-align: center;
        top: 35%;
        left: 40%;
        width: 25%;
        height: 55%;
        border: 1px solid green;
        border-radius: 12px;
        background-color:darkcyan;
    }

    button {
        text-align:center;
        margin: 1em;
        width:75%;
    }

    h2{
        margin-bottom:0px;
    }

</style> 