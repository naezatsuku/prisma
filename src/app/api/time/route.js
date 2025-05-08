import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const datas = await req.json();
        console.log("Received Data:", datas);

        // ✅ データの挿入を Promise.all で並列処理
        const insertedData = await Promise.all(datas.map(async (data) => {
            const { className, time } = data;
            return prisma.outline.create({
                data: { className, time: parseInt(time) } // 🚀 `time` を `Int` に変換
            });
        }));

        return NextResponse.json(insertedData);
    } catch (error) {
        console.error("Prisma Error:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}