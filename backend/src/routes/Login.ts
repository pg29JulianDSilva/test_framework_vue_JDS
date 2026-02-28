import { Router } from "express";
import { Login } from "../models/login";

const router = Router();

router.post("/", async (req, res) => {
    try {
        const created = await Login.create(req.body);
        res.status(201).json(created);
    } catch (e: any) {
        res.status(400).json({ error: e.message });
    }
})

router.get("/", async (req, res) => {
    const users = await Login.find({}).sort({ user_id: 1 });
    res.json(users);
});

router.get("/:id", async (req, res) => {
    try {
        const user = await Login.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "User not found, maybe you need to register" });

        return res.json(user);

    } catch (e: any) {
        res.status(400).json({ error: e.message });
    }
});

router.get("/email/:email", async (req, res) => {
    try {
        const user = await Login.findOne({ email: req.params.email });

        if (!user) return res.status(404).json({ error: "User not found, maybe you need to register" });

        return res.json(user);
    } catch (e: any) {
        res.status(400).json({ error: e.message });
    }
});

router.get("/users/:username", async (req, res) => {
    try {
        const user = await Login.findOne({ username: req.params.username });
        if (!user) return res.status(404).json({ error: "User not found, maybe you need to register" });

        return res.json(user);
    } catch (e: any) {
        res.status(400).json({ error: e.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updated = await Login.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true
        });
        if (!updated) return res.status(404).json({ error: "User not found, maybe you need to register" });
    } catch (e: any) {
        res.status(400).json({ error: e.message })
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deleted = await Login.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "User could not be deleted" });
    } catch (e: any) {
        res.status(400).json({ error: e.message })
    }
});

export default router;