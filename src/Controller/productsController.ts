import { productSchema, updateProductSchema } from "../helpers/validationSchema";
import prisma from "../helpers/prismaClient";

export async function createProduct(data:Record<string, unknown>, userId:string) {
    const isValid = productSchema.safeParse(data);
    if (!isValid.success) throw isValid.error
    const record = isValid.data;

    await prisma.product.create({
        data: {
            name: record.name,
            image: record.image,
            brand: record.brand,
            category: record.category,
            description: record.description,
            price: record.price,
            countInStock: record.countInStock,
            rating: record.rating,
            numReviews: record.numReviews,
            userId: userId
        }
    })
   
}

export async function readProducts() {
    const response = await prisma.product.findMany()
    if (!response) throw "No product";
    return response
}

export async function readOneProduct(id:string) {
    const response = await prisma.product.findUnique({
        where: {
            id
        }
    })
    if (!response) throw "Product not found";
    return response
}

export async function updateProduct(data:Record<string, unknown>, id:string) {
    const isValid = updateProductSchema.safeParse(data);
    if (!isValid.success) throw isValid.error
    const record = isValid.data;

   const response =  await prisma.product.update({
        where: {
            id: id,
          },
        data: {
            name: record.name,
            image: record.image,
            brand: record.brand,
            category: record.category,
            description: record.description,
            price: record.price,
            countInStock: record.countInStock,
            rating: record.rating,
            numReviews: record.numReviews,
      
        }
   })
    if (!response) throw "Product not found";
    return ('Product details updated successfully')
   
}

export async function deleteProduct(id:string) {
   const response = await prisma.product.delete({
        where: {
            id
        }
    })
    if (!response) throw "Product not found";
    return ("Product deleted successfully")
}
