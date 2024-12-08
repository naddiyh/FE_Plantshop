"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardProduct } from "@/features/catalog/CardProduct";
import { BreadCrumbsCatalog } from "@/components/breadcrumbs/BreadCrumbs";
import { IProduct } from "@/interface/IProduct";

const Catalog = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/products");
      if (response.data && Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        setError("No products found");
      }
    } catch (error: unknown) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong, please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const indoorProducts = products.filter(
    (product) => product.category.name === "Indoor Plant",
  );
  const outdoorProducts = products.filter(
    (product) => product.category.name === "Kita",
  );

  return (
    <section className="flex w-full flex-col gap-6 px-4 py-20 md:gap-10 md:px-32 md:py-28">
      <section className="flex justify-between">
        <BreadCrumbsCatalog />
        <div>
          <input
            className="input input-bordered hidden h-10 bg-[#f9f4ea]"
            placeholder="Search"
          />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-md w-fit rounded-xl bg-[#4db48d] px-3 py-1 font-semibold text-white">
          Indoor Plant
        </h2>
        <section className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:gap-8">
          {indoorProducts.length > 0 ? (
            indoorProducts.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))
          ) : (
            <div>No Indoor products available</div>
          )}
        </section>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-md w-fit rounded-xl bg-[#4db48d] px-3 py-1 font-semibold text-white">
          Outdoor Plant
        </h2>
        <section className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:gap-8">
          {outdoorProducts.length > 0 ? (
            outdoorProducts.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))
          ) : (
            <div>No Outdoor products available</div>
          )}
        </section>
      </section>
    </section>
  );
};

export default Catalog;
