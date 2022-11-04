import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    // await prisma.user.deleteMany()
    // const preference = await prisma.userPreference.create({
    //     data: {
    //         emailUpdate: true
    //     }
    // })
    // console.log(preference)

    const user = await prisma.user.update({
        where: {
            email : 'Sally@Test3.com'
        },
        data: {
            userPreference: {
                disconnect : true
                //     {
                //     id : '92631e96-7c08-4dbf-a088-1e9e15121691'
                // }
            }
        }
    })
    // const user = await prisma.user.findFirst({
    //     where: {
    //         email: "Sally@Test3.com"
    //     }
    // })
    // const user =    await prisma.user.createMany({
    //       data : [{
    //         name : "Sally",
    //           email: "Linda@test322.com",
    //           age: 32,
    //       },
    //     {
    //             name : "Molly3",
    //             email: "Molly@tes3t232.com",
    //             age: 57,
    //         }],
    //   })
    console.log(user)
}

main()
    .catch(e=> {
    console.error(e.message)
})
.finally(async ()=>{
    await prisma.$disconnect()
})