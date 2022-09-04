import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import products from "./Routes/productsRoute";
import users from "./Routes/usersRoute";

dotenv.config()
const app = express()

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


app.use("/api/product", products)
app.use("/api/user", users)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})