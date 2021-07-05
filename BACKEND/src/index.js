import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import CookieParser from "cookie-parser";

import auth from "./routes/auth";
import predavaci from "./routes/predavaci";
import forma from "./routes/forma";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(CookieParser());

app.get('/', (req,res)=>{
    res.send('im online')
})

app.use("/predavaci", predavaci);
app.use("/user", auth);
app.use("/anketa", forma);

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
