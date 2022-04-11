import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // table user create sample
  await prisma.user.create({
    data: {
      name: "new",
      email: "name@hoge.com",
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I like Node.js" },
      },
    },
  });

  // table user update sample
  await prisma.user.update({
    data: {
      name: "digglue_member",
      email: "member@digglue.com",
      posts: {
        create: { title: "Hello digglue" },
      },
      profile: {
        update: { bio: "テクノロジーで持続可能な世界を実装する" },
      },
    },
    where: {
      id: 1,
    },
  });

  // table post update sample
  await prisma.post.update({
    data: {
      title: "Hello sample update",
    },
    where: {
      id: 1,
    },
  });

  // find from user sample
  const usersWithPostsProfile = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(usersWithPostsProfile, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
