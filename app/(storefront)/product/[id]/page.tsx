import { addItem } from "@/app/actions";
import { FeaturedProducts } from "@/app/components/storefront/FeaturedProducts";
import { ImageSlider } from "@/app/components/storefront/ImageSlider";
import { ShoppingBagButton } from "@/app/components/SubmitButtons";
import prisma from "@/app/lib/db"
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star } from "lucide-react";
import { notFound } from "next/navigation";
import {unstable_noStore as noStore} from "next/cache"


async function getData(productId: string){
    noStore();
    const data = await prisma.product.findUnique({
        where: {
            id: productId,
        },

        select: {
            price: true,
            images: true,
            description: true,
            name: true,
            id: true
        }
    });

    if(!data) {
        return notFound();
    }
    return data;
}  


export default async function ProductIdRoute({ params }: { params: { id: string } }) {
    const data = await getData(params.id);
    const addProducttoShoppingCart = addItem.bind(null, data.id);

    // Function to transform the plain description string into an array of { title, value } objects
    function formatDescription(description: string) {
        return description.split("\n").map((line) => {
            const [title, ...valueParts] = line.split(":"); // Split at the first colon
            return {
                title: title.trim(),
                value: valueParts.join(":").trim(), // Join back in case the value has colons
            };
        });
    }

    const formattedDescription = formatDescription(data.description);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6">
                <ImageSlider images={data.images} />
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{data.name}</h1>
                    <p className="text-3xl mt-2 text-gray-900">${data.price}</p>

                    {/* Dynamically Render Description */}
                    <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Car Specifications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {formattedDescription.map((desc, index) => (
                                <div key={index} className="border-b pb-2">
                                    <h3 className="font-bold text-lg">{desc.title}:</h3>
                                    <p className="text-gray-700">{desc.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shopping Cart */}
                    <form action={addProducttoShoppingCart}>
                        <ShoppingBagButton />
                    </form>
                </div>
            </div>

            <div className="mt-16">
                <FeaturedProducts />
            </div>
        </>
    );
}
