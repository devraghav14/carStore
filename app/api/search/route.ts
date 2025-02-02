import { NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query) {
        return NextResponse.json({ results: [] });
    }

    const results = await prisma.product.findMany({
        where: {
            name: {
                contains: query, 
                mode: "insensitive",
            },
        },
        select: {
            id: true,
            name: true,
            images: true, 
        },
        take: 5, 
    });

    return NextResponse.json({ results });
}
