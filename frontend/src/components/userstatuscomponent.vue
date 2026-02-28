<template>
    <!--This component will take the message and tell the user that it was sended-->

    <h3 id="User-status"> The user {{ ActualUser.userLog }} is logged in</h3>
</template>

<!--Script reference to change the value-->
<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { userInformation } from "../stores/currentuser";

    const ActualUser = userInformation();

</script>

<!--Details for the style-->
<style scopred>
    #User-status {
        position: fixed;
        top: 10%;
        left: 5%;
        width: 15%;
        height: 10%;
        background: rgb(255 255 255, 50);
        color:saddlebrown;
    }
</style>