"use client";
import { IProduct } from "@/interface/IProduct";
import Image from "next/image";

import { IoStar } from "react-icons/io5";
import { Quantity } from "./Quantity";

interface CardProps {
  product: IProduct;
}

export const CardProduct = ({ product }: CardProps) => {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <section className="flex flex-col gap-6">
        {/* Main product image */}
        <div
          className="relative h-[300px] w-full md:h-[380px] md:w-[500px]"
          key={product.id}
        >
          <Image
            src={
              product.images?.[0]
                ? `http://127.0.0.1:8000/storage/${product.images[0]}`
                : "/images/cactuss.png"
            }
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-lg"
          />
        </div>

        <div className="grid grid-cols-4 gap-2">
          {product.images?.slice(1).map((image: string, index: number) => (
            <div
              key={index}
              className="relative h-[65px] w-[80px] md:h-[100px] md:w-[115px]"
            >
              <Image
                src={`http://127.0.0.1:8000/storage/${image}`}
                alt={`${product.name} ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-2 md:gap-4">
        <h2 className="text-xl text-black md:text-3xl">{product.name}</h2>
        <p className="text-black">{product.description}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border-orange-100 bg-green-100 px-1">
            <IoStar className="h-3 w-3 text-green-500" />
            <p className="text-[12px] text-black">{product.rating}</p>
          </div>
          <p className="text-[12px] text-black">{product.sold}+ terjual</p>
        </div>

        <Quantity />
      </section>
    </section>
  );
};
