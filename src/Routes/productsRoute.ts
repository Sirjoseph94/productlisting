import { Router } from "express";
import { auth } from "../helpers/authMiddleware";
import { createProduct, readProducts, readOneProduct, updateProduct, deleteProduct } from "../Controller/productsController";
import { userRequest } from "../types/express";

const router = Router();

router.get("/all", async(_req, res) => {
   try {
       const response = await readProducts();
       res.status(200).json({response})
   } catch (error) {
    res.status(404).json(error)
   }
})

router.post("/new", auth, async(req: userRequest, res) => {
    try {
        const user_id = req.user.user_id as unknown as string
        await createProduct(req.body, user_id);
        res.status(201).json({success: "New product added successfully"})
    } catch (error) {
        res.status(400).json({error})
    }
})

router
    .route("/:id")
    .get(auth, async(req, res) => {
        try {
            const response = await readOneProduct(req.params.id);
            res.status(200).json({response})
        } catch (error) {
         res.status(404).json({error})
        }
    })
    .put(auth, async (req, res) => {
        try {
        const id = req.params.id as unknown as string
        const response = await updateProduct(req.body, id)
        res.status(200).json({success: response})
    } catch (error) {
        res.status(404).json({error})
    }
    })
    .delete(auth, async (req, res) => {
    try {
        const response = await deleteProduct(req.params.id)
        res.status(200).json({success: response})
    } catch (error) {
        res.status(404).json({error})
    }
})

export default router