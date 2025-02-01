import Image from "next/image";
import Link from "next/link";
import hatchback from '@/public/hatchback.jpg';
import all from '@/public/all.jpg';
import suv from '@/public/suv.jpg';
import sedan from '@/public/sedan.jpg';
import luxury from '@/public/luxury.jpg';

export function CategoriesSelection() {
    return (
        <div className="py-24 sm:py-32">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-extrabold tracking-tight">Browse by Car Type</h2>
                <Link className="text-sm font-semibold text-primary hover:text-primary/80" href="/products/all">
                    Browse all Cars &rarr;
                </Link>
            </div>

            <div className="mt-6">
                {/* All Cars (spanning all columns) */}
                <div className="group w-full aspect-w-2 aspect-h-1 rounded-xl overflow-hidden">
                    <Image src={all} alt="All Cars" className="object-cover object-center w-full h-full" />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                    <div className="p-6 flex items-end">
                        <Link href="/products/all">
                            <h3 className="text-white font-semibold">All Cars</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>

                {/* Row of 4 Categories (SUV, Sedan, Hatchback, Sports) */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* SUV Cars */}
                    <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden">
                        <Image src={suv} alt="SUV Cars" className="object-cover w-full h-full" />
                        <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                        <div className="p-6 flex items-end">
                            <Link href="/products/suv">
                                <h3 className="text-white font-semibold">SUV Cars</h3>
                                <p className="mt-1 text-sm text-white">Shop Now</p>
                            </Link>
                        </div>
                    </div>

                    {/* Sedan Cars */}
                    <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden">
                        <Image src={sedan} alt="Sedan Cars" className="object-cover w-full h-full" />
                        <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                        <div className="p-6 flex items-end">
                            <Link href="/products/sedan">
                                <h3 className="text-white font-semibold">Sedan Cars</h3>
                                <p className="mt-1 text-sm text-white">Shop Now</p>
                            </Link>
                        </div>
                    </div>

                    {/* Hatchback Cars */}
                    <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden">
                        <Image src={hatchback} alt="Hatchback Cars" className="object-cover w-full h-full" />
                        <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                        <div className="p-6 flex items-end">
                            <Link href="/products/hatchback">
                                <h3 className="text-white font-semibold">Hatchback Cars</h3>
                                <p className="mt-1 text-sm text-white">Shop Now</p>
                            </Link>
                        </div>
                    </div>

                    {/* Sports Cars */}
                    <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden">
                        <Image src={luxury} alt="Sports Cars" className="object-cover w-full h-full" />
                        <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                        <div className="p-6 flex items-end">
                            <Link href="/products/sports">
                                <h3 className="text-white font-semibold">Sports Cars</h3>
                                <p className="mt-1 text-sm text-white">Shop Now</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
