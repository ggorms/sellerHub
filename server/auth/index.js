const router = require("express").Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

router.post("/register", async (req, res,next)=>{

    const salt_rounds = 5;

    const hashedPassword = await bcrypt.hash(req.body.password, salt_rounds)

    try{
        const seller = await prisma.seller.create({
            data:{
                username: req.body.username,
                password:hashedPassword
            }
        })

        const token = jwt.sign({id:seller.id}, process.env.JWT)

        res.status(201).send({token, seller:{sellerId:seller.id, username: seller.username}})

    }catch(err){
        next(err)
    }

})

router.post("/login", async (req, res,next)=>{
    try{
        const seller = await  prisma.seller.findUnique({
            where: {username: req.body.username}
        })

        if(!seller){
            return res.status(401).send("Invalid Login")
        }

        const isValid = bcrypt.compare(req.body.password, seller.password)

        if(!isValid){
            return res.status(401).send("Invalid Login")
        }

        const token = jwt.sign({id:seller.id}, process.env.JWT)

        res.send({token, seller:{sellerId:seller.id, username: seller.username}})

    }catch(err){
        next(err);
    }
});

router.get("/me", async (req, res,next)=>{
    if(!req.seller){
        return res.send({})
    }
    try{
        const seller = await prisma.seller.findUnique({
            where: {id: req.seller.id}
        })

        res.send(seller)
    }catch(err){
        next(err)
    }
})

module.exports= router;