const express =require('express');
const router = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

router.get('/', async (req, res, next) => {
    try {
        const allSellers = await prisma.seller.findMany();
        res.send(allSellers)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const seller = await prisma.seller.findUnique({
            where: {
                id: +req.params.id
            }
        })
        res.send(seller)
    } catch (error) {
        next(error)
    }
})

module.exports = router;