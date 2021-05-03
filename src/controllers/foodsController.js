const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports={
    createFood:(req,res)=>{
        const {body} = req
        prisma.foods.create({
            data:body
        })
        .then((data)=>{
            res.send({
                message: "Data Food Succes",
                status:200,
                data:data
            })
        })
        .catch((err)=>{
            res.send({
                message:"Gagal",
                status:500,
                err
            })
        })
    },
    getFoods:(req,res)=>{
        prisma.foods.findMany()
        .then((data)=>{
            res.send({
                message:'Succes Get All Data',
                status:200,
                data
            })
        })
        .catch((err)=>{
            res.send({
                message:"Gagal",
                status:500,
                err
            })
        })
    },
    updateFoods:(req,res)=>{
        const {id} = req.params;
        const {body} = req;
        const newBody={
            ...body,
        };
        prisma.foods.updateMany({
            where:{
                id_foods:parseInt(id)
            },
            data:newBody
        })
        .then((data)=>{
            res.send({
                message:'Succes update foods',
                status:200,
                data
            })
        })
        .catch((err)=>{
            res.send({
                message:"Gagal",
                status:500,
                err
            })
        })
    },
    deletefoods:(req,res)=>{
        const {id} = req.params;
        prisma.foods.deleteMany({
            where:{
                id_foods:parseInt(id)
            }
        })
        .then((data)=>{
            res.send({
                message:'Succes Delete Foods',
                status:200,
                data
            })
        })
        .catch((err)=>{
            res.send({
                message:"Gagal",
                status:500,
                err
            })
        })
    }
}