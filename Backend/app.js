import express from "express";
import cors from "cors";
const app = express();

// json body
express.json();

//cors
app.use(cors());


export default app;