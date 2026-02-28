<template>
    <div class="about-page">
        <h1>This game is about something</h1>
        <p>Best game ever!</p>
        <p>VFS 2025</p>
        <!--Widegts ;)-->
        <!--This are the new components-->
        <FooterDetails />
    </div>
    <userstatuscomponent />
</template>

<script setup lang="ts">
    //Import for the components
    import FooterDetails from "../components/FooterDetails.vue";
    import userstatuscomponent from "../components/userstatuscomponent.vue";
</script>

<style scoped>
    .about-page {
        text-align: center;
        margin-top: 10px;
        background-image: linear-gradient(to bottom, cornflowerblue, lightblue);
        border-radius: 50px;
    }

    h1 {
        padding: 1em;
    }
</style> 