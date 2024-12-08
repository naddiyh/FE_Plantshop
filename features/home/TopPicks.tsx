"use client";
import { CardProduct } from "../catalog/CardProduct";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { IProduct } from "@/interface/IProduct";
export const TopPicks = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products");
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data.filter((product: IProduct) => product.id));
        } else {
          setError("No products found");
        }
      } catch (error) {
        setError("There was an error fetching products");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    getAllProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <section className="flex w-full flex-col gap-4 py-10 md:gap-12">
      <div className="flex flex-col gap-2 p-2 md:p-0">
        <h2 className="text-xl font-bold text-[#144230] md:text-3xl">
          Top Picks For You
        </h2>
        <p className="text-md text-black md:text-lg">
          Find a wonderfull plant to suit your taste with our great selection of
          natural
        </p>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4">
        {products.map((product: IProduct) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </section>
      <Link
        href="/"
        className="pt-6 text-center text-gray-400 hover:text-gray-300"
      >
        View More ⮕
      </Link>
    </section>
  );
};
