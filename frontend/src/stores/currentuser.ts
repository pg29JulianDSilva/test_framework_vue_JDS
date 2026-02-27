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

    async function sendMessage( user: string, mail: string, reason: string) {
        try {
            console.log(await api("GET", "/"));

            const totalMessages = await api("GET", "/connect")

            const connect = await api("POST", "/connect", {
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

    onMounted((u: string, m: string, r: string) => {
        sendMessage(u, m, r);
    })
    

    return { sendMessage, errorMessage }
})

export const userInformation = defineStore('UserInfo', () => {

    const errorMessage = ref("");
    const userLog = ref("not-logged-in");
    const emailLog = ref("not-logged-in");
    const passwordLog = ref("not-logged-in");

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

    async function CreateUser() {
        try {
            console.log(await api("GET", "/"));

            const totalUsers = await api("GET", "/login")

            const thisUser = await api("POST", "/login", {
                user_ID: totalUsers.lenght,
                username: userLog.value,
                password: passwordLog.value,
                email: emailLog.value
            });

            console.log(thisUser);

            console.log(await api("GET", `/login/${thisUser._id}`));

        } catch (err: any) {
            errorMessage.value = err?.message ?? "Unknown";
        }
    }

    async function LoginInside(userName: string, passWord: string) {
        try {
            const actualUser = await api("GET", `/login/${userName}`);
            if (actualUser.password != passWord) { errorMessage.value = "Incorrect password" }
            else {
                userLog.value = actualUser.username;
                passwordLog.value = actualUser.password;
                emailLog.value = actualUser.email;
            }
        } catch (err: any) {
            errorMessage.value = err?.message ?? "Unknown";
        }

    }

    onMounted(() => {
        //LoginInside()
    })

    return { CreateUser, errorMessage, userLog, passwordLog, emailLog }
})