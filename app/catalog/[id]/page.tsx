"use client";
import dynamic from "next/dynamic";

// Mengimpor SingleProduct secara dinamis
const DynamicDetailProduct = dynamic(
  () => import("@/features/catalog/SingleProduct"),
  { ssr: false },
);

const ProductDetailPage = () => {
  return (
    <div>
      {/* SingleProduct akan secara otomatis menangkap productId dari URL */}
      <DynamicDetailProduct />
    </div>
  );
};

export default ProductDetailPage;
