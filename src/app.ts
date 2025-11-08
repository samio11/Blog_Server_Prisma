import express, { Application, Request, Response } from "express";
import cors from "cors";
import { rootRouter } from "./app/routes";
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", rootRouter);

app.use("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is running successfully🌐" });
});

export default app;
