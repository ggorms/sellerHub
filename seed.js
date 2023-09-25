const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')


const sellers = [
    {
        username: "Nike",
        password: "test"
    },
    {   
        username: "Addidas",
        password: "test"
    },
    {
        username: "Timberland",
        password: "test"
    }
]

const products = [
    {
        title: "Dunk High",
        price: 164.99,
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e7687f1-c13e-4bac-8ffa-a6f863ae9157/dunk-high-retro-mens-shoe-dTVTCk.png",
        sellerId: 1,

    },
    {
        title: "Court Vision Low",
        price: 99.99,
        imgUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2a5710b8-70b8-4316-8078-4311dd01d025/court-vision-low-womens-shoes-KPB597.png",
        sellerId: 1,

    },
    {
        title: "Air Max Scorpian FlyKnit",
        price: 119.99,
        imgUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f19b9e9f-57c3-4209-b2d0-c8e3306367e9/air-max-scorpion-flyknit-mens-shoes-Tvw4kl.png",
        sellerId: 1,

    },
    ,
    {
        title: "Air Force 1",
        price: 109.99,
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png",
        sellerId: 1,

    },
    {
        title: "G.T. Cut 2.0",
        price: 169.99,
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52ad53ad-86b5-45c7-801c-4097caaf5988/gt-cut-2-mens-basketball-shoes-tmfmFl.png",
        sellerId: 1,

    },
    ,
    {
        title: "Structure 25",
        price: 139.99,
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bb3ed06c-99bf-4a71-a61e-b97ebbefb2f6/structure-25-mens-road-running-shoes-extra-wide-Xsg0D0.png",
        sellerId: 1,

    },
    {
        title: "Ultra Bounce Running",
        price: 79.99,
        imgUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/a0111a233e4640c2b54baf560104f817_9366/Ultrabounce_Running_Shoes_White_HP5778_01_standard.jpg",
        sellerId: 2,

    },
    {
        title: "Response Super 3.0",
        price: 89.99,
        imgUrl: "https://adidas.co.ma/130327-large_default/response-super-30-shoes.jpg",
        sellerId: 2,

    },
    {
        title: "Nora Unisex",
        price: 64.99,
        imgUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/9ed384982af143fe9a0bae70015c83d7_9366/Nora_Shoes_White_GY6964_01_standard.jpg",
        sellerId: 2,

    },
    {
        title: "Adielette 22",
        price: 59.99,
        imgUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/264b53bdf09a48de9bb0f1eca6682e1b_9366/Adilette_22_Slides_Green_IF5395_01_standard.jpg",
        sellerId: 2,

    },
    {
        title: "AlphaBoost V1",
        price: 64.99,
        imgUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b57bca11296b4c249c33af3500b5b5dd_9366/Alphaboost_V1_Shoes_White_HP2759_01_standard.jpg",
        sellerId: 2,

    },
    {
        title: "NMD_R1",
        price: 159.99,
        imgUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3cf0c669b07048cdb455ae02000e88df_9366/NMD_R1_Shoes_Pink_GZ4963_01_standard.jpg",
        sellerId: 2,

    },
    {
        title: "6-Inch Boots",
        price: 84.99,
        imgUrl: "https://images.timberland.com/is/image/timberland/A2E31231-HERO?wid=650&hei=650&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0",
        sellerId: 3,

    },
    {
        title: "Chukka Boots",
        price: 149.99,
        imgUrl: "https://images.timberland.com/is/image/timberland/50061231-HERO?wid=650&hei=650&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0",
        sellerId: 3,

    },
    {
        title: "Euro Hiker",
        price: 109.99,
        imgUrl: "https://images.timberland.com/is/image/timberland/91566231-HERO?wid=650&hei=650&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0",
        sellerId: 3,

    },
    {
        title: "Maddsen Boots",
        price: 99.99,
        imgUrl: "https://images.timberland.com/is/image/timberland/2731R001-HERO?wid=650&hei=650&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0",
        sellerId: 3,

    },
    {
        title: "Get Outside Sandal",
        price: 19.99,
        imgUrl: "https://images.timberland.com/is/image/timberland/A5W91327-HERO?wid=650&hei=650&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0",
        sellerId: 3,

    },
    {
        title: "Motion 6 Hiker",
        price: 159.99,
        imgUrl: "https://images.timberland.com/is/image/timberland/A67JC231-HERO?wid=650&hei=650&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0",
        sellerId: 3,

    },
    
]

async function main() {
    salt_rounds = 5;
    await Promise.all(
       sellers.map( async (seller) => {
            const hashedPassword = await bcrypt.hash(seller.password, salt_rounds)
            return prisma.seller.create({
                data: {
                    username: seller.username,
                    password: hashedPassword
                }
            })
        }),
       )
       await Promise.all( products.map(async (product) => {
        return prisma.products.create({
            data: {
                title: product.title,
                price: product.price,
                imgUrl: product.imgUrl,
                sellerId: product.sellerId
            }
        })
    }
))
    

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

