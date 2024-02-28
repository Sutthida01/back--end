const {PrismaClient} =require('@prisma/client')
const prisma = new PrismaClient()

async function run() {
  await prisma.$executeRawUnsafe('DROP Database prisma1')
  await prisma.$executeRawUnsafe('CREATE Database prisma1')
}
console.log('Reset DB')
run()