<script setup lang="ts">

</script>

<template>
    <div id="app">
        <header id="Guide">
            <nav>
                <!--Increase to connect with the web pages-->
                <router-link class="Links" to="/">Home</router-link>
                <router-link class="Links" to="/about">About</router-link>
                <router-link class="Links" to="/Leaderboard">Complete Leaderboard</router-link>
                <router-link class="Links" to="/Contact">Contact</router-link>
                <router-link class="Buttons" to="/LogIn">LogIn/Register</router-link>
            </nav>
        </header>
        <main>
            <router-view />
        </main>
    </div>
</template>



<style scoped>
    #app{
        background-color:palegreen;
    }

    #Guide{
        margin:1em;
    }

    nav {
        display:flex;
        justify-content: space-evenly;
    }

    .Links{
        font-weight:bold;
    }

    .Buttons {
        text-align: center;
        font-weight: bold;
        width: 15%;
        background-color: aquamarine;
        border: 2px solid black;
        border-radius: 20%;
    }

</style>

