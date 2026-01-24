import express, { type Request, type Response } from "express";
import cors from "cors";

type LeaderboardItem = {
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
        { player: "Spencer", score: 9999 },
        { player: "Nick", score: 10 },
        { player: "Vini", score: 2 },
        { player: "Kiran", score: 0 },
        { player: "Yeison", score: -2 },
        { player: "Raf", score: -9999 },
    ];

    res.json(summaryData);
});

app.listen(port, () => {
    console.log(`backend at localhost http://localhost:${port}`);
});
