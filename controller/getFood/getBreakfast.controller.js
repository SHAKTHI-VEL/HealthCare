const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient()

const getBreakfast=async(req,res)=>{
    try {
        const{id}=req.params.id
        const {date}=req.body
        const data=await prisma.breakfast.findFirst({
            where:{
                userId:id,
                date:date.concat('T00:00:00.000Z')
            }
        })
        if(!data){
            return res.status(200).json({success:false,message:"Data not inserted"})
        }else{
            return res.status(200).json({success:true,message:"Data successfully fetched",data})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal Server Error"});             
    }
}
module.exports=getBreakfast