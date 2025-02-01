"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
    {
        id: 0,
        name: "Home",
        href: "/"
    },
    {
        id: 1,
        name: "All",
        href: "/products/all"
    },
    {
        id: 2,
        name: "SUVs",
        href: "/products/suv"
    },
    {
        id: 3,
        name: "Sedans",
        href: "/products/sedan"
    },
    {
        id: 4,
        name: "Hatchbacks",
        href: "/products/hatchback"
    },
    {
        id: 5,
        name: "Sports",
        href: "/products/sports"
    },
    {
        id: 6,
        name: "Admin",
        href: "/dashboard"
    },
];

export function NavbarLinks() {
    const location = usePathname();
    
    return (
        <div className="hidden md:flex justify-center items-center gap-x-2 ml-8">
            {navbarLinks.map((item) => (
                <Link 
                    href={item.href} 
                    key={item.id} 
                    className={cn(
                        location === item.href ? "bg-muted" : "hover:bg-muted hover:bg-opacity-75",
                        "group p-2 font-medium rounded-md"
                    )}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}
