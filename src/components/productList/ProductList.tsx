import Pagination from "@/components/common/Pagination";
import Product, { ProductProps } from "./Product";
import LoadMore from "../common/LoadMore";
import { getProducts } from "./actions";

type Props = {
  searchParams: { page?: string };
};

export const PAGE_SIZE = 10;

const ProductList = async ({ searchParams }: Props) => {
  const activePage = searchParams?.page ? parseInt(searchParams.page) : 1;
  const { total, products } = await getProducts({
    skip: 0,
    pageSize: PAGE_SIZE,
  });

  return (
    <div className="py-4">
      <div className="mx-auto grid grid-cols-2 gap-4 mb-4">
        {products}

        <LoadMore pageSize={PAGE_SIZE} />
      </div>
      {/* <Pagination
        numPages={Math.ceil(total / PAGE_SIZE)}
        activePage={activePage}
      />
      <div className="mb-4">Total: {total}</div> */}
    </div>
  );
};

export default ProductList;
