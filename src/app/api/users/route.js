import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return Response.json(users);
  } catch (error) {
    return Response.json({ error: 'データ取得失敗' }, { status: 500 });
  }
}
export async function POST(req) {
    try {
        const { name, email } = await req.json();
        const newUser = await prisma.user.create({
            data: { name, email }
          });
          return Response.json(newUser);
    }catch(error){
        return Response.json({error:"失敗"},{status:500})
    }
}