import { Prisma, PrismaClient } from "@prisma/client"
const client = new PrismaClient()

class CategoriesModel {
    
    async getAllCategories() {
        try {
            await client.$connect()
            const categories = await client.productCategory.findMany()
            await client.$disconnect()

            return categories
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async getCategoryById(id) {
        try {
            await client.$connect()
            const category = await client.productCategory.findUnique({
                where: {
                    id: id
                }
            })
            await client.$disconnect()

            return category
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async addCategory(title) {
        try {
            await client.$connect()
            const res = await client.productCategory.create({
                data: {
                    title: title
                }
            })
            await client.$disconnect()

            return res
        } catch (e) {
            console.error(e)
            await client.$disconnect()
        }
    }

    async deleteCategory(id) {
        try {
            await client.$connect()
            const res = await client.productCategory.delete({
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

    async updateCategory(id, title) {
        try {
            await client.$connect()
            const res = await client.productCategory.update({
                where: {
                    id: id
                },
                data: {
                    title: title
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

module.exports = new CategoriesModel()