<template>
        <!--This is just an image with a click link function-->
        <img class="pop"  @click="sponsor()" src="C:\Users\Public\Repos\test_framework_vue_JDS\frontend\src\assets\pop.jpg" />
</template>

<script setup lang="ts">
    //Function to open the source of the ad
    function sponsor() {
        window.open('https://www.wikihow.com/Get-Rid-of-Pop%E2%80%90Ups', '_blank');
    }
</script>

<style scopred>
    /*Details to the popup to be an actual pop up*/
    .pop {
        position: fixed;
        top: 65%;
        left: 75%;
        width: 15%;
        height: 25%;
        border: 1px solid yellow;
        border-radius: 12px;
    }

</style>