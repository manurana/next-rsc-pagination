import Pagination from "@/components/common/Pagination";

type Props = {
  searchParams: { page?: string };
};

type Product = {
  id: number;
  title: string;
};

const PAGE_SIZE = 10;
const BASE_URL = "https://dummyjson.com/products?select=id,title";

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
  const products = data.products as Product[];

  return (
    <div>
      <div className="mb-4">Count: {count}</div>
      <div className="my-4">
        {products.map((product) => (
          <div key={product.id}>{`${product.id}. ${product.title}`}</div>
        ))}
      </div>
      <Pagination
        numPages={Math.ceil(count / PAGE_SIZE)}
        activePage={activePage}
      />
    </div>
  );
};

export default ProductList;
