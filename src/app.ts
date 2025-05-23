import express from "express";
import router from "./router/index";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "health server start!" });
});

export default app;
