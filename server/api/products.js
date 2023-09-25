const express =require('express');
const router = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

router.get('/', async (req,res,next) => {
    try {
        const allProducts = await prisma.products.findMany();
        res.send(allProducts);
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const product = await prisma.products.findUnique({
            where: {
                id: +req.params.id
            }
        })
        res.send(product);
    } catch (error) {
        next(error)
    }
})

router.get('/seller/:id', async (req, res, next) => {
    try {
        const allProducts = await prisma.products.findMany({
            where: {
                sellerId: +req.params.id
            }
        });
        res.send(allProducts);
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req,res,next) => {
    try {
        const product = await prisma.products.create({
            data: req.body
        })
        res.send(product)
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const product = await prisma.products.update({
            where: {
                id: +req.params.id
            },
            data: req.body
        })
        res.send(product)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const product = await prisma.products.delete({
            where: {
                id: +req.params.id
            }
        })
        res.send(product)
    } catch (error) {
        next(error)
    }
})

module.exports = router;