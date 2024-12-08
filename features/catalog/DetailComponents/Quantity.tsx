import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
export const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };
  return (
    <section className="flex gap-4">
      <div className="flex w-fit items-center rounded-md border p-2">
        <button onClick={handleDecrease} className="p-2">
          <FaMinus />
        </button>
        <span className="px-4 text-lg">{quantity}</span>
        <button onClick={handleIncrease} className="p-2">
          <FaPlus />
        </button>
      </div>

      <button
        className="flex items-center gap-2 rounded-md bg-green-600 px-3 py-1 text-white"
        aria-label="Buy now"
      >
        <IoCart className="h-6 w-6" />
        Add to Cart
      </button>
    </section>
  );
};
