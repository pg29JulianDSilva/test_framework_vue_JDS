<template>
    <div class="landing-page">
        <h1>Cool game :)</h1>
        <p>Best game ever!</p>

        <!--Widegts ;)-->
        <CounterWidget />

        <!--This one dosen't matter where is placed, because is supposed to be fixed-->
        <PopUpAdSpace />

        <LeaderboardSummary />

        <FooterDetails />
    </div>
</template>



<script setup lang="ts">
    import CounterWidget from "../components/CounterWidget.vue";
    import LeaderboardSummary from "../components/LeaderboardSummary.vue";
    import FooterDetails from "../components/FooterDetails.vue";
    import PopUpAdSpace from "../components/PopUpAdSpace.vue";
</script>



<style scoped>
    .landing-page {
        text-align: center;
        margin-top: 10px;
        background-image: linear-gradient(to bottom, cornflowerblue, lightblue);
        border-radius: 50px;
    }

    h1 {
        padding: 1em;
    }
</style> 