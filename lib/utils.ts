import { products } from "@wix/stores";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// function to overwriteexisting tailwind class
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// function to put a delay to simulate data fetching delays for loading spinners or skeleton components
export async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// function to format currency in the deside currency format
export function formatCurrency(price: number | string = 0, currency: string = "USD") {
    return Intl.NumberFormat("en", { style: "currency", currency }).format(Number(price));
}

// fucntion to get the formatted price of the product when displaying a price in the UI.
export function getFormattedPrice(product: products.Product) {
    const minPrice = product.priceRange?.minValue;
    const maxPrice = product.priceRange?.maxValue;

    if (minPrice && maxPrice && minPrice !== maxPrice) {
        return `from ${formatCurrency(minPrice, product.priceData?.currency)}`;
    } else {
        return product.priceData?.formatted?.discountedPrice || product.priceData?.formatted?.price || "n/a";
    }
}
