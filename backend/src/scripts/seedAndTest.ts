/*import dotenv from "dotenv";
dotenv.config();

const BASE = `http://localhost:${process.env.PORT}`;

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
        throw new Error(`ERRORY ${res.status}`)
    }

    return data;
}

async function main() {
    console.log(await api("GET", "/"));

    const students = await api("GET", "/students");
    for (const s of students) {
        await api("DELETE", `/students/${s._id}`);
    }
    console.log(`  Deleted ${students.length} students`);

    const vini = await api("POST", "/students", {
        studentId: "VINI3",
        name: { first: "Vini", last: "cius" },
        grade: 10,
        email: "vini@cius.br"
    });

    console.log(vini);

    console.log(await api("GET", `/students/${vini._id}`));
}


main().catch((err) => {
    console.log(err.message);
    process.exit(1);
})*/