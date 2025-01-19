import React from "react";
import { delay } from "@/lib/utils";
import Product from "../shared/Product";
import { getCollectionBySlug } from "@/app/wix-api/collections";
import { queryProducts } from "@/app/wix-api/products";

async function FeaturedProducts() {
    await delay(1000);

    // const wixClient = getWixClient();
    // const { collection } = await wixClient.collections.getCollectionBySlug("featured-products");
    const collection = await getCollectionBySlug("featured-products");

    if (!collection?._id) {
        return null;
    }

    // const featuredProducts = await wixClient.products
    //     .queryProducts()
    //     .hasSome("collectionIds", [collection._id])
    //     .descending("lastUpdated")
    //     .find();
    const featuredProducts = await queryProducts({
        collectionIds: collection._id,
        sort: "last_updated",
    });

    if (!featuredProducts.items.length) {
        return null;
    }

    return (
        <div className="space-y-5">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <div className="flex grid-cols-2 flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
                {featuredProducts.items.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default FeaturedProducts;
