import { getCart } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Navbar() {
    const cart = await getCart();
    const totalQuantity = cart?.lineItems.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;

    return (
        <header className="bg-background shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 p-1">
                <Link href="/" className="flex items-center gap-4">
                    <Image src="/assets/EyeTitaniumlogo.webp" alt="Eye-Titanium+-logo" width={60} height={60} />
                    <span className="text-lg font-medium">Eye Titanium+</span>
                </Link>
                {totalQuantity} items in your cart
            </div>
        </header>
    );
}
