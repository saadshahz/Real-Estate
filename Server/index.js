import express from "express";
import connection from "./Database/db.js";
import dotenv from "dotenv";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

const PORT = 3001;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);


app.listen(PORT, () => {
  console.log(`Server is Runnig Succesfully on PORT ${PORT}`);
});
