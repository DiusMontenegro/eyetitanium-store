import React from "react";
import { products } from "@wix/stores";
import Link from "next/link";
import WixImage from "./WixImage";
import Badge from "../ui/badge";
import { getFormattedPrice } from "@/lib/utils";
import { DiscountBadge } from "../home/DiscountBadge";

interface ProductProps {
    product: products.Product;
}

const Product = ({ product }: ProductProps) => {
    const mainImage = product.media?.mainMedia?.image;

    return (
        <Link href={`/products/${product.slug}`} className="h-full border bg-card">
            <div className="relative overflow-hidden">
                <WixImage
                    mediaIdentifier={mainImage?.url}
                    alt={mainImage?.altText}
                    width={700}
                    height={700}
                    className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-3 right-3 flex flex-wrap items-center gap-2">
                    {product.ribbon && <Badge>{product.ribbon}</Badge>}

                    {product.discount && <DiscountBadge data={product.discount} />}

                    <Badge className="bg-secondary font-semibold text-secondary-foreground">
                        {getFormattedPrice(product)}
                    </Badge>
                </div>
            </div>
            <div className="space-y-3 p-3">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <div className="line-clamp-5" dangerouslySetInnerHTML={{ __html: product.description || "" }} />
            </div>
        </Link>
    );
};

export default Product;
