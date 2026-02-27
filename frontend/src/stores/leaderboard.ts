import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'

type LeaderboardItem = {
    player: string;
    score: number;
}

export const leaderboardDataStore = defineStore('LB', () => {

    type LeaderboardItem = {
        player: string;
        score: number;
    }

    const leaderboardData = ref<LeaderboardItem[]>([]);
    const errorMessage = ref("");

    async function fetchleaderboardData() {
        try {
            const res = await fetch("http://localhost:3363/api/leaderboard")

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

    return { onMounted, leaderboardData, errorMessage }
})