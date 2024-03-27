import { Prisma, PrismaClient } from "@prisma/client"
const client = new PrismaClient()

class SertificatesModel {
    
    async getAllSertificates() {
        try {
            await client.$connect()
            const sertificates = await client.sertificates.findMany()
            await client.$disconnect()

            return sertificates
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async getSertificateById(id) {
        try {
            await client.$connect()
            const sertificate = await client.sertificates.findUnique({
                where: {
                    id: id
                }
            })
            await client.$disconnect()

            return sertificate
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async addSetrificate(title, image) {
        try {
            await client.$connect()
            const res = await client.sertificates.create({
                data: {
                    title: title,
                    sertificateImage: image
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async deleteSertificate(id) {
        try {
            await client.$connect()
            const res = await client.sertificates.delete({
                where: {
                    id: id
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async updateSertificate(id, title, image) {
        try {
            await client.$connect()
            const res = await client.sertificates.update({
                where: {
                    id: id
                },
                data: {
                    title: title,
                    image: image
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }
}

module.exports = new SertificatesModel()