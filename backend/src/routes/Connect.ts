import { Router } from "express";
import { Connect } from "../models/connect";

const router = Router();

router.post("/", async (req, res) => {
    try {
        const created = await Connect.create(req.body);
        res.status(201).json(created);
    } catch (e: any) {
        res.status(400).json({ error: e.message });
    }
})

router.get("/", async (req, res) => {
    const communicate = await Connect.find({}).sort({ connectID: 1 });
    res.json(communicate);
});

router.get("/:id", async (req, res) => {
    try {
        const communicate = await Connect.findById(req.params.id);
        if (!communicate) return res.status(404).json({ error: "Message not found" });
    } catch (e: any) {
        res.status(400).json({ error: e.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updated = await Connect.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true
        });
        if (!updated) return res.status(404).json({ error: "Crouse not found or updated" });
    } catch (e: any) {
        res.status(400).json({ error: e.message })
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deleted = await Connect.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Crouse could not be deleted" });
    } catch (e: any) {
        res.status(400).json({ error: e.message })
    }
});

export default router;