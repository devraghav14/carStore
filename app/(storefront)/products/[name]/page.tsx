import { ProductCard } from "@/app/components/storefront/ProductCard";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import PaginationComponent from "@/app/components/storefront/PaginationComponent";

async function getData(productCategory: string) {
    switch (productCategory) {
        case "all": {
            const data = await prisma.product.findMany({
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
                where: {
                    status: "published",
                },
            });

            return {
                title: "All Cars",
                data: data,
            };
        }
        case "suv": {
            const data = await prisma.product.findMany({
                where: {
                    status: "published",
                    category: "suv",
                },
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
            });
            return {
                title: "SUV Cars",
                data: data,
            };
        }
        case "sedan": {
            const data = await prisma.product.findMany({
                where: {
                    status: "published",
                    category: "sedan",
                },
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
            });

            return {
                title: "Sedan Cars",
                data: data,
            };
        }
        case "hatchback": {
            const data = await prisma.product.findMany({
                where: {
                    status: "published",
                    category: "hatchback",
                },
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
            });

            return {
                title: "Hatchback Cars",
                data: data,
            };
        }
        case "sports": {
            const data = await prisma.product.findMany({
                where: {
                    status: "published",
                    category: "sports",
                },
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
            });

            return {
                title: "Sports Cars",
                data: data,
            };
        }
        default: {
            return notFound();
        }
    }
}

export default async  function CategoriesPage({ params }: { params: { name: string } }) {
    noStore();
    const { data, title } = await  getData(params.name);
    return (
        <section>
            <h1 className="font-semibold text-3xl my-5">{title}</h1>
            <PaginationComponent items={data} itemsPerPage={6} />
        </section>
    );
}