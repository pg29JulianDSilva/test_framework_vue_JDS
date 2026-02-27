<template>
    <!--This component will take the message and tell the user that it was sended-->
    <section id="Direct-message">
        <h2>Want to talk to us directly?</h2>
        <p>Send us a message and we will answer as soon as possible</p>
        <label for="name">Please gives us your name (not necesary your username):</label>
        <input type="text" name="name" v-model="name" />
        <label for="email">Please gives us an email so we can answer to you:</label>
        <input type="email" name="email" v-model="email" />
        <label for="response">With this information we will reach you as soon as we can:</label>
        <textarea name="response" type="text" id="PQR" v-model="write"></textarea>
        <button id="Submmited" @click="sended()">Send Message</button>
    </section>
</template>

<!--Script reference to change the value-->
<script setup lang="ts">

    import { ref, onMounted } from "vue";
    import { userdatasendStore } from "../stores/currentuser";

    const write = ref('');
    const name = ref('');
    const email = ref('');

    const OutMessage = userdatasendStore();

    function sended() {

        //TODO connect with mongoose
        OutMessage.user = name.value as string;
        OutMessage.mail = email.value as string;
        OutMessage.reason = write.value as string;

        OutMessage.sendMessage();

        alert("Thank you, will answer you as soon as we want to!");
        write.value = '';
        name.value = '';
        email.value = '';
    }

</script>

<!--Details for the style-->
<style scopred>
    label {
        text-align: left;
        font-weight: bold;
    }

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