// the prismaClient create by command after migrate comand run and it gerntarte ts if ur project
// js not ts so go schema.prisma and update genrator  
// from this provider     = "prisma-client"
// to this provider     = "prisma-client-js"
// and import client from directory not @Prisma 
// check where generate import { PrismaClient } from "./generated/prisma/client.js";

import { config } from "./config/configForenv.js";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
const adapter = new PrismaPg({
  connectionString: config.dataBaseUrl,
});

const prisma = new PrismaClient({ adapter });

export { prisma };
