import express, { type Request, type Response } from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import { error } from "console";
require("dotenv").config();

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
        const db = await mysql.createConnection({
            host: process.env.DB_HOST ?? "localhost",
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        const [rows] = await db.execute(
            "SELECT player_id, player_users, player_position, player_score FROM lb ORDER BY player_position;"
        );

        console.log(rows);

        let summaryData: LeaderboardItem[] = rows;

        res.json(summaryData);
    } catch (e: any) { res.status(400).json({error: e.message}) }
});

app.listen(process.env.PORT, async () => {
    console.log(`backend at localhost http://localhost:${process.env.PORT}`);
});
