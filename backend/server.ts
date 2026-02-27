import express, { type Request, type Response } from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import { error } from "console";
import { connectDB } from "./db";
import dotenv from "dotenv";

import connectRouter from './src/routes/Connect';
import loginRouter from './src/routes/Login';

dotenv.config();

//for the MySQL
const pool = mysql.createPool({
    host: process.env.DB_HOST ?? "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});

type LeaderboardItem = {
    id: number;
    placement: number;
    player: string;
    score: number;
};

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/ping", (req: Request, res: Response) => {
    res.json({ message: "OK" });
});

app.get("/api/leaderboard", async (req: Request, res: Response) => {

    try {
        /*const db = await mysql.createConnection(pool);
            /*.createConnection({
            host: process.env.DB_HOST ?? "localhost",
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });*/

        const [rows] = await pool.execute(
            "SELECT player_id, player_placement, player_user, player_score FROM lb ORDER BY player_placement;"
        );

        console.log(rows);

        let summaryData: LeaderboardItem[] = rows;

        res.json(summaryData);
    } catch (e: any) { res.status(400).json({error: e.message}) }
});

app.get("/", (req, res) => res.json({ ok: true, service: "score-api" }));

app.use("/connect", connectRouter);
app.use("/login", loginRouter);

async function start() {
    try {
        await connectDB(process.env.MONGODB_URI as string);
        const port = Number(process.env.DB_PORT);
    } catch (err: any) {
        console.error("Startup error", err?.message);
        process.exit(1);
    }
}

app.listen(process.env.DB_PORT, async () => {
    console.log(`backend at localhost http://localhost:${process.env.DB_PORT}`);
});

start();
