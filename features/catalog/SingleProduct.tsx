import { BreadCrumbsSingle } from "@/components/breadcrumbs/BreadCrumbs";
import axios from "axios";
import { CardProduct } from "./DetailComponents/CardSingle";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { IProduct } from "@/interface/IProduct";

const SingleProduct = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      async function getDetailProduct() {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/products/${id}`,
          );
          setProduct(response.data.product);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      }
      getDetailProduct();
    }
  }, [id]);

  return (
    <section className="flex w-full flex-col gap-4 px-4 py-20 md:gap-10 md:p-32">
      <section>
        <BreadCrumbsSingle />
      </section>

      {product && <CardProduct product={product} />}
    </section>
  );
};

export default SingleProduct;
