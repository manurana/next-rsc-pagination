import Image from "next/image";

export type ProductProps = {
  id: number;
  title: string;
  desciption: string;
  images: string[];
};

const Product = ({ product }: { product: ProductProps }) => {
  return (
    <div className="border border-gray-500 rounded-md p-4 flex flex-col items-center gap-4">
      <div className="w-32 aspect-square relative">
        <Image
          className="object-cover"
          src={product.images[0]}
          fill
          alt={product.desciption}
        />
      </div>
      {`${product.id}. ${product.title}`}
    </div>
  );
};

export default Product;
