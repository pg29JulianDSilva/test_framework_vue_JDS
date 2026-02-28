<template>
    <div class="access">
        <h2>{{ TitleText }}</h2>
        <div class="login" v-show="HasAccount">
            <h3>User</h3>
            <input type="text" name="user" v-model="user" />
            <h3>Password</h3>
            <input type="text" name="password" v-model="password" />
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
    import { userInformation } from "../stores/currentuser";

    const loginupdate = userInformation();

    const logout = ref(loginupdate.logged);

    const TitleText = ref('Log In');
    const HasAccount = ref(true);
    const DosentHasAccount = ref(false);
    const ButtonText = ref('No account yet?');

    const user = ref('');
    const password = ref('');

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

    }

    function OnLogOut() {
        if (logout.value == true) {
            logout.value = !logout.value
            //alert("Error, your account is still loged in!");
            //loginupdate.searched = user.value as string;
            loginupdate.UpdateLoginState();
        }
        
    }

    function OnLogIn() {
        if (logout.value == false) {

            loginupdate.searched = user.value as string; 

            checklogin();
        }
    }

    function OnRegister() {
        if (logout.value == false) {
            alert("Error, try in a few weeks!");
            logout.value = !logout.value
        }
    }

    async function checklogin() {
        const result = await loginupdate.LoginInside();
        //loginupdate.LoginInside();
        console.log(loginupdate.userLog as string);

        if (loginupdate.userLog != "none") {
            //alert("Somebody is already loged in!");
            logout.value = !logout.value
            user.value = "";
        } else {
            alert("Error, it seems we had a problem with your account!");
        }
    };

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