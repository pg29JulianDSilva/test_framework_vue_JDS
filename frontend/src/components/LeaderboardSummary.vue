<template>
    <div class="leaderboard-summary">
        <h2>Leaderboard Summary</h2>
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
                    <td v-if=" item.player_position <= 5" >{{ item.player_position }}</td>
                    <td v-if=" item.player_position <= 5" >{{ item.player_users }}</td>
                    <td v-if=" item.player_position <= 5" >{{ item.player_score }}</td>
                </tr>
            </tbody>
        </table>
        <!--Conditional in html with Vue-->
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
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
            const res = await fetch("/api/leaderboard")

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

    /*
    const fetchLeaderBoardData(async () => {
        .fetch(http://localhost:3000/api/leaderboard)
            .then(response => response.json());
            .then(data => console.log(data));
             leaderboardData.value = data
            .catch (error => errorMessage);
        return response.data;
    });*/





</script>

<style scoped>
    .leaderboard-summary{
        margin-top:10px;
    }

    table {
        border-collapse: collapse;
        margin: auto;
        justify-content: space-evenly;
        margin-bottom: 1em;
    }

    th, td {
        border: 1px solid #ccc;
        margin: 0.2em;
    }

    th{
        font-size:1.7em;
        padding-left:1em;
        padding-right:1em;
    }

    .error {
        color: rebeccapurple;
    }
</style>