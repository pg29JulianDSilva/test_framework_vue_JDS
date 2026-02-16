<template>
    <div class="Leaderboard-Component">
        <h1>This the total ranking for this game</h1>
        <p>Try to beat your own record!</p>
        <p>VFS 2025</p>
        <div>
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Player</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <!--This is a for loop inside html, to develop an implementation using pseudo code with Vue-->
                    <tr v-for="(item, index) in leaderboardData">
                        <td>{{ item.player_position }}</td>
                        <td>{{ item.player_users }}</td>
                        <td>{{ item.player_score }}</td>
                    </tr>
                </tbody>
            </table>
            <!--Conditional in html with Vue-->
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    //onMounted is like the stuff we already imported on the main widget
    import { onMounted, ref } from "vue";

    //More typescript
    type LeaderboardItem = {
        player: string;
        score: number;
    }

    const leaderboardData = ref<LeaderboardItem[]>([]);
    const errorMessage = ref("");

    async function fetchleaderboardData() {
        try {
            const res = await fetch("http://localhost:3000/api/leaderboard")

            if (!res.ok) throw new Error(`Server error ${res.status}`)

            //specify with TypeScript
            const data = (await res.json()) as LeaderboardItem[]
            //this is to add the stuff in the data directly
            leaderboardData.value = data
        } catch (err: any) {
            errorMessage.value = err?.message ?? "Unknown";
        }

    }

    onMounted(() => {
        fetchleaderboardData();
    })
</script>

<style scoped>
    .Leaderboard-Component {
        text-align: center;
        margin-top: 10px;
        background-image: linear-gradient(to bottom, cornflowerblue, lightblue);
        border-radius: 50px;
    }

    h1 {
        padding: 1em;
    }

    table {
        display: table;
        border-collapse: collapse;
        margin: auto;
    }

    th, td {
        border: 1px solid green;
        display: table-cell;
        vertical-align: inherit;
        text-align: center;
    }

    th {
        font-size: 1.7em;
        padding-left: 1em;
        padding-right: 1em;
    }

    .error {
        color: rebeccapurple;
    }
</style>