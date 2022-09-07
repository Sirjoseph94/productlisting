import { Router } from "express";
import {loginUser, registerUser, userProducts} from "../Controller/usersController"
import { auth } from "../helpers/authMiddleware";
import { userRequest } from "../types/express";

const router = Router()

router.post("/login", async(req, res) => {
    try {
        const data = req.body
        const response = await loginUser(data)
        res.status(200).json({token: response})
    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

router.post("/register", async(req, res) => {
    try {
        const data = req.body;
        const response = await registerUser(data);
        res.status(201).json({response})
    } catch (error) {
        res.status(400).json({error})
    }
})

router.get("/", auth, async(req: userRequest, res) => {
    try {
        const userId = req.user.user_id as unknown as string;
        const response = await userProducts(userId);
        res.status(200).json({response})
    } catch (error) {
        res.status(400).json({error})
    }
})


export default router;
