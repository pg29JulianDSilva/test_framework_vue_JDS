import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'


const BASE = `http://localhost:3363`;

export const userdatasendStore = defineStore('OutMessage', () => {

    const errorMessage = ref("");


    async function api(method: string, path: string, body?: any) {
        const url = `${BASE}${path}`;
        const opts: RequestInit = {
            method,
            headers: { "Content-Type": "application/json" }
        };
        if (body) opts.body = JSON.stringify(body);

        const res = await fetch(url, opts);
        const data = await res.json();

        if (!res.ok) {
            errorMessage.value = `ERRORY ${res.status}`;
            throw new Error(`ERRORY ${res.status}`);
        }

        return data;
    }

    async function main( user: string, mail: string, reason: string) {
        try {
            console.log(await api("GET", "/"));

            const totalMessages = await api("GET", "/connect")

            const connect = await api("POST", "/students", {
                connectID: totalMessages.lenght,
                name: user,
                email: mail,
                content: reason
            });

            console.log(connect);

            console.log(await api("GET", `/connect/${connect._id}`));
        } catch (err: any) {
            errorMessage.value = err?.message ?? "Unknown";
        }
    }

    onMounted((u: string, m: string, c: string) => {
        main(u, m, c);
    })

    return { onMounted, errorMessage }
})