import Pagination from "@/components/common/Pagination";
import Product, { ProductProps } from "./Product";

type Props = {
  searchParams: { page?: string };
};

const PAGE_SIZE = 10;
const BASE_URL =
  "https://dummyjson.com/products?select=id,title,description,images";

const getProducts = async ({ page = 1 }: { page?: number }) => {
  const skip = (page - 1) * PAGE_SIZE;
  const url = `${BASE_URL}&skip=${skip}&limit=${PAGE_SIZE}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const ProductList = async ({ searchParams }: Props) => {
  const activePage = searchParams?.page ? parseInt(searchParams.page) : 1;
  const data = await getProducts({
    page: activePage,
  });
  const count = data.total;
  const products = data.products as ProductProps[];

  return (
    <div className="py-4">
      <div className="mx-auto grid grid-cols-2 gap-4 mb-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        numPages={Math.ceil(count / PAGE_SIZE)}
        activePage={activePage}
      />
      <div className="mb-4">Count: {count}</div>
    </div>
  );
};

export default ProductList;
