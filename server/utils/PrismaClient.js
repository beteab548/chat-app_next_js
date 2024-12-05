//create a prisma insatance if a client doesn't have a prisma instance yet
import { PrismaClient } from "@prisma/client";
let prismaInstance = null;
function getPrismaInstance() {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient();
    return prismaInstance;
  } else {
    return prismaInstance;
  }
}
export default getPrismaInstance;
