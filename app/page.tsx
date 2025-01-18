import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import FeaturedProducts from "@/components/home/FeaturedProducts";
import ProductSkeleton from "@/components/shared/ProductSkeleton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="font-roboto mx-auto max-w-[1216px] space-y-10 px-5 py-10">
            <div className="flex items-center bg-secondary md:h-96">
                <div className="space-y-7 p-10 text-center md:w-1/2">
                    <h1 className="text-3xl font-bold md:text-4xl">Boost your gaming experience</h1>
                    <p>Experience the modern way of gaming with our best Laptops ever!</p>
                    <Button asChild>
                        <Link href="/shop">
                            Shop Now <ArrowRight className="ml-5" />
                        </Link>
                    </Button>
                </div>
                <div className="relative hidden h-full w-1/2 md:block">
                    <Image
                        priority
                        src="/assets/EyeTitaniumlogo.webp"
                        alt="titanium-eyglass-frame"
                        className="h-full object-cover"
                        width={1000}
                        height={1000}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent" />
                </div>
            </div>
            <Suspense fallback={<ProductSkeleton />}>
                <FeaturedProducts />
            </Suspense>
        </main>
    );
}
