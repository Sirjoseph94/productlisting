import prisma from "../src/helpers/prismaClient";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongo = null;
 
const connectDB = async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
 
  await prisma.$connect()
};

const dropDB = async () => {
    if (mongo) {
      db.dropDatabase()
      await prisma.$disconnect()
      await mongo.stop();
    }
};
  
const dropCollections = async () => {
    if (mongo) {
        const collections = await db.testcollection;
        for (let collection of collections) {
            await collection.drop();
        }
    }
}

export {connectDB, dropDB, dropCollections}