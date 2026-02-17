<template>
    <div class="Login-page">
        <h1>Access Page</h1>
        <LogInComponent />
        <FooterDetails />
    </div>
</template>

<script setup lang="ts">
    //Import for the components
    import FooterDetails from "../components/FooterDetails.vue";
    import LogInComponent from "../components/LogInComponent.vue";
</script>

<style scoped>
    .Login-page {
        text-align: center;
        margin-top: 10px;
        background-image: linear-gradient(to bottom, cornflowerblue, lightblue);
        border-radius: 50px;
    }

    h1 {
        padding: 1em;
    }
</style> 