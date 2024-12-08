import Link from "next/link";
import { GoHome } from "react-icons/go";
import { CiShoppingTag } from "react-icons/ci";
import { GrShop } from "react-icons/gr";

export const BreadCrumbsCatalog = () => {
  return (
    <div className="breadcrumbs text-sm text-green-600">
      <ul>
        <li>
          <Link href="/" className="md:text-md flex gap-1 text-[12px]">
            <GoHome className="h-4 w-4 md:h-5 md:w-5" />
            Home
          </Link>
        </li>
        <li>
          <Link href="/catalog" className="text-md flex gap-1 text-[12px]">
            <CiShoppingTag className="h-4 w-4 md:h-5 md:w-5" />
            Catalog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export const BreadCrumbsSingle = () => {
  return (
    <div className="breadcrumbs text-sm text-green-600">
      <ul>
        <li>
          <Link href="/" className="md:text-md flex gap-1 text-[12px]">
            <GoHome className="h-4 w-4 md:h-5 md:w-5" />
            Home
          </Link>
        </li>
        <li>
          <Link href="/catalog" className="text-md flex gap-1 text-[12px]">
            <CiShoppingTag className="h-4 w-4 md:h-5 md:w-5" />
            Catalog
          </Link>
        </li>
        <li>
          <Link
            href="/catalog/id"
            className="text-md inline-flex items-center gap-1 text-[12px]"
          >
            <GrShop className="h-3 w-4 md:h-4 md:w-5" />
            Single Product
          </Link>
        </li>
      </ul>
    </div>
  );
};
