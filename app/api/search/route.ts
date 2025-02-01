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
                contains: query, // Finds partial matches
                mode: "insensitive", // Case-insensitive search
            },
        },
        select: {
            id: true,
            name: true,
            images: true, // Fetch images for better UI
        },
        take: 5, // Limit to 5 results
    });

    return NextResponse.json({ results });
}
