import express from "express";
import { reveniuRouter } from "./routes/reveniu.route";
import { tallyRouter } from "./routes/tally.route";

import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(reveniuRouter, tallyRouter);

app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
