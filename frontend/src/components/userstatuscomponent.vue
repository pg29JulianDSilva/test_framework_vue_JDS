<template>
    <!--This component will take the message and tell the user that it was sended-->

    <h1 id="User-status">{{ ActualUser.userlog }}</h1>
</template>

<!--Script reference to change the value-->
<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { userInformation } from "../stores/currentuser";

    const ActualUser = userInformation();

    onMounted(() => {
        ActualUser.userLog;
    })

</script>

<!--Details for the style-->
<style scopred>
    #User-status {
        position: fixed;
        top: 15%;
        left: 15%;
        width: 15%;
        height: 15%;
    }
</style>