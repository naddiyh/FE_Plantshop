import Link from "next/link";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { IProduct } from "@/interface/IProduct";

interface CardProps {
  product: IProduct;
}

export const CardProduct = ({ product }: CardProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <Link
      key={product.id}
      href={`/catalog/${product.id}`}
      className="flex w-full flex-col gap-2 shadow-xl md:w-[200px] md:gap-4"
    >
      <div className="relative h-[160px] md:h-[180px]">
        <Image
          src={
            product.images?.[0]
              ? `http://127.0.0.1:8000/storage/${product.images[0]}`
              : "/images/cactuss.png"
          }
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-2 px-3 pb-3">
        <div className="flex flex-col gap-1">
          <h3 className="md:text-md text-sm text-black">{product.name}</h3>
          <p className="text-sm font-bold text-[#4db48d]">
            {formatCurrency(Number(product.price))}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border-orange-100 bg-green-100 px-1">
            <IoStar className="h-3 w-3 text-green-500" />
            <p className="text-[12px] text-black">{product.rating}</p>
          </div>
          <p className="text-[12px] text-black">{product.sold}+ terjual</p>
        </div>
      </div>
    </Link>
  );
};
