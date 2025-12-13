import express from "express";
import { initializeAPI } from "./api/index";
import cors from "cors";

const app = express()
app.use(express.json());
app.use(cors());
const port = 3000

initializeAPI(app)


app.listen(port, () => {
    console.log("Webserver is running on", port)
})

