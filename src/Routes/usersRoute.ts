import { Router } from "express";
import {loginUser, registerUser} from "../Controller/usersController"

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

router.get("/user/:id", (req, res) => {
    
})


export default router;
