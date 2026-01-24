<template>
    <section class="counter">
        <h2>Counter:</h2>
        <p>Count: {{ store.count }}</p>
        <p>Double: {{ store.doubleCount }}</p>

        <!--the @click is a condition that simplyfies elements from java, like in this case with evenlistener-->
        <!--This apply both with pinia and vue-->
        <button @click="store.increment">Increment</button>
    </section>
</template>

<script setup lang="ts">
    import { useCounterStore } from "../stores/counter";

    const store = useCounterStore();
</script>

<style scopred>
    .counter{
        border: 1px solid #ccc;
        border-radius: 12px;
    }

    button {
        padding: 10px 10px;
        cursor: pointer;
    }
</style>