import z from "zod";

export const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const registerUSerSchema = z.object({
    fullname: z.string().min(6),
    gender: z.string().max(1),
    email: z.string().email(),
    phone: z.string().transform(data=>Number(data)),
    address: z.string(),
    password: z.string()

})

export const productSchema = z.object({
    name: z.string(),
    image: z.string(),
    brand: z.string(),
    category: z.string(),
    description: z.string(),
    price: z.string().transform(data => Number(data)),
    countInStock: z.string().transform(data => Number(data)),
    rating: z.string().transform(data => Number(data)),
    numReviews: z.string().transform(data => Number(data)),

})

export const updateProductSchema = z.object({
    name: z.string().optional(),
    image: z.string().optional(),
    brand: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    price: z.string().transform(data => Number(data)).optional(),
    countInStock: z.string().transform(data => Number(data)).optional(),
    rating: z.string().transform(data => Number(data)).optional(),
    numReviews: z.string().transform(data => Number(data)).optional()
})