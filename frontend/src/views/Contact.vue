<template>
    <div class="Contact-page">
        <h1>Do you want to conntact us?</h1>
        <div id="Organize">
            <!--This is for the contact info (maybe it dosen't worth to transform into an widget')-->
            <section id="Conntact-Info">
                <h4>This is our contact information</h4>
                <p>+1 123 456 789</p>
                <p>+1 666 666 666</p>
                <p>+1 000 000 001</p>
                <p>TotallyRealEmail@Yahoo.com</p>
                <p>ThisIsNotSpam@Yahoo.com</p>
                <p>WeDontStealYourData@Yahoo.com</p>
                <h4>When can you contact us?</h4>
                <p>Mon - Tue</p>
                <p>00:00 - 00:10</p>
                <p>The other days we are busy</p>
            </section>
            <!--For the Comunication widget-->
            <ContactImputWidget />
        </div>

        <userstatuscomponent />

        <!--new widgets-->
        <FooterDetails />
    </div>
</template>

<script setup lang="ts">
    //To import the new widgets
    import { ref } from "vue";
    import FooterDetails from "../components/FooterDetails.vue";
    import ContactImputWidget from "../components/ContactImputWidget.vue";
    import userstatuscomponent from "../components/userstatuscomponent.vue";
    

</script>

<!--Style for this specific page-->
<style scoped>
    .Contact-page {
        text-align: center;
        margin-top: 10px;
        background-image: linear-gradient(to bottom, cornflowerblue, lightblue);
        border-radius: 50px;
    }

    h1 {
        padding: 1em;
        margin:0px;
    }

    p{
        font-size:1em;
    }

    h4{
        font-size:1.5em;
        margin:0em;
    }

    #Organize{
        display:flex;
        justify-content:space-evenly;
    }

    #Conntact-Info{
        text-align:left;
        padding:0.5em;
    }
</style> 