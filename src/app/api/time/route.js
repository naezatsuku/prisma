import { NextResponse } from "next/server";
//import { PrismaClient } from "@/prisma/client";
//const prisma = new PrismaClient();

export async function POST(req) {
    const data = await req.json();
    console.log(data);
    return NextResponse.json({message:"ok"});
}