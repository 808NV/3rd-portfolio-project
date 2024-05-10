import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  console.log("route work");
});

export default router;
