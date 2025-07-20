import express from "express";
import route from "./routes/routes.js";
import cors from "cors";
import globalErrorHandler from "./middlewares/globalError.middleware.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/api", route);

app.get("/", (req, res) => res.json({ status: "working" }));

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
