import {
  SquarespaceProduct,
  SquarespaceProductsResponse,
} from "@/api/schemas/squarespace";
import { useQuery } from "@tanstack/react-query";

const PRODUCTS_URL = "https://api.squarespace.com/1.0/commerce/products";

export async function fetchProducts(): Promise<SquarespaceProductsResponse> {
  const res = await fetch(PRODUCTS_URL, {
    headers: {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_SQUARESPACE_API_KEY}`,
      "User-Agent": "expo-interview",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  return res.json();
}

export function useProducts() {
  return useQuery<SquarespaceProductsResponse, Error, SquarespaceProduct[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    select: (data) => data.products,
  });
}
