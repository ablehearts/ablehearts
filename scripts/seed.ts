import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const mary = await prisma.beneficiary.upsert({
    where: { id: "seed-mary" },
    update: {},
    create: {
      id: "seed-mary",
      fullName: "Mary Nyaboke Onchangu",
      relation: "Aunt",
    },
  });
  const lydia = await prisma.beneficiary.upsert({
    where: { id: "seed-lydia" },
    update: {},
    create: {
      id: "seed-lydia",
      fullName: "Lydia Kwamboka Onchangu",
      relation: "Daughter",
    },
  });
  console.log({ mary, lydia });
}
main().finally(() => prisma.$disconnect());
