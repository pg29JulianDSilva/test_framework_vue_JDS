import express, { type Request, type Response } from "express";
import cors from "cors";

type LeaderboardItem = {
    placement: number;
    player: string;
    score: number;
};

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/ping", (req: Request, res: Response) => {
    res.json({ message: "OK" });
});

app.get("/api/leaderboard-summary", (req: Request, res: Response) => {
    const summaryData: LeaderboardItem[] = [
        { placement: 1 , player: "Spencer", score: 9999 },
        { placement: 2 , player: "Vi", score: 3789 },
        { placement: 3 , player: "Vini", score: 1478 },
        { placement: 4 , player: "Kiran", score: 998 },
        { placement: 5 , player: "Yeison", score: 789 },
        { placement: 6 , player: "Diana", score: 582 },
        { placement: 7 , player: "Julian R", score: 499 },
        { placement: 8 , player: "Felipe", score: 455 },
        { placement: 9 , player: "Ken", score: 454 },
        { placement: 10 , player: "Tyler", score: 333 },
        { placement: 11 , player: "Chris", score: 330 },
        { placement: 12 , player: "Tobias", score: 315 },
        { placement: 13 , player: "Evelyn", score: 298 },
        { placement: 14 , player: "Nick", score: 280 },
        { placement: 15 , player: "Dylan", score: 198 },
        { placement: 16 , player: "Julian D Silva", score: 15 },
        { placement: 17,  player: "Raf", score: -9999 },
    ];

    res.json(summaryData);
});

app.listen(port, () => {
    console.log(`backend at localhost http://localhost:${port}`);
});
