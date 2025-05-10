import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
    try{
        const datas = await req.json();
    console.log(datas);
    for(let i=0;i<datas.length;i++ ){
       const data = datas[i];
       const {className , time } = data 
       await prisma.outline.create({
        data:{className:className,time:time}
       });
       
    }
    return NextResponse.json({message:"成功しました",data:datas});
    }catch(error){
        return NextResponse.json(({message:"失敗しました"}))
    }
    
    
}