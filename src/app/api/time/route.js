import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
    try{
        const datas = await req.json();
        
        
        console.log(datas)
        const postToDatabase = datas.map(async (data) =>{
            const {className,time} = data;
            console.log(data);
            return prisma.Outline.upsert({
                where:{className:className},
                update:{time:time},
                create:{className:className,time:time}
            }
                
        )
        }
        )
       const insertedData = await Promise.all(postToDatabase);
    console.log(insertedData);
    return NextResponse.json({message:"成功しました",data:insertedData});
    }catch(error){
    console.error("Error during insertion:", error);
    return NextResponse.json({ message: "失敗しました", error: error.message });
}
    
    
}