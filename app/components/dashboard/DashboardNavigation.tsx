"use client";

import { cn } from '@/lib/utils';
import Link from 'next/link'; // Import Link from next/link
import { usePathname } from 'next/navigation';


const links = [{
    name: "Dashboard",
    href: '/dashboard',

    },
    {
        name: "Orders",
        href: '/dashboard/orders',
    },
    {
        name: 'Products',
        href: '/dashboard/products'
    },
    {
        name: "Banner Picture",
        href: "/dashboard/banner",
    },
    {
        name: "Home",
        href: "/",
    }

]


export function DashboardNavigation() {
    const pathName = usePathname()
    return(
        <>
       {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn(link.href === pathName ? 'text-foreground': 'text-muted-foreground hover:text-foreground')}>{link.name}</Link>
        ))}

        </>
    )
}