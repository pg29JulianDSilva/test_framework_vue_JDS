<template>
    <!--This component will take the message and tell the user that it was sended-->
    <section id="Direct-message">
        <h4>Want to talk to us directly?</h4>
        <p>Send us a message and we will answer as soon as possible</p>
        <textarea type="text" id="PQR" v-model="write"></textarea>
        <button id="Submmited" @click="sended()">Send Message</button>
    </section>
</template>

<!--Script reference to change the value-->
<script setup lang="ts">

    import { ref } from "vue";

    const write = ref('');

    function sended() {
        alert("Thank you, will answer you as soon as we want to!");
        write.value = '';
    }
</script>

<!--Details for the style-->
<style scopred>
    #PQR {
        width: 20vw;
        padding: 2em;
        height: 5em;
    }

    #Direct-message {
        text-align: center;
        display: grid;
        margin: 0px;
    }

    #Submmited {
        width: 10em;
        height: 5em;
    }
</style>