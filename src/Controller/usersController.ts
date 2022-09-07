import { loginUserSchema, registerUSerSchema } from "../helpers/validationSchema";
import prisma from "../helpers/prismaClient";
import { generateAccessToken } from "../helpers/authMiddleware";
import { encryptPassword, decryptPassword } from "../helpers/hashPassword";




export async function loginUser(data: Record<string, unknown>) {
    const isValid = loginUserSchema.safeParse(data);
    if (!isValid.success) throw isValid.error;
    const record = isValid.data;

    const user = await prisma.user.findUnique({
        where: {
          email: record.email,
        },
      });
      if (!user) throw `No user with ${record.email}. Please signup`;
      const match = await decryptPassword(record.password, user.password)
      if (!match) throw "incorrect password";
      return generateAccessToken(user.id as unknown as string);


}

export async function registerUser(data:  Record<string, unknown>) {
    const isValid = registerUSerSchema.safeParse(data);
    if (!isValid.success) throw isValid.error;
    const record = isValid.data;

    return prisma.user.create({
        data: {
          fullname: record.fullname,
          gender: record.gender,
          email: record.email,
          phone: record.phone,
          address: record.address,
          password: await encryptPassword(record.password) as string,
        },
        select: {
          fullname: true,
          email: true,
          gender: true,
            phone: true,
          address: true
        },
      });
    }

    export async function userProducts(id:string) {
        const response = await prisma.user.findUnique({
            
            where: {
                id: id
            },
            
            include: {
                products: true
            }
        })

        if (!response) throw 'User not found';
        return response 
    }