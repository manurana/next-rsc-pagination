"use server";

import Product, { ProductProps } from "./Product";

const BASE_URL =
  "https://dummyjson.com/products?select=id,title,description,images";

export const getProducts = async ({
  skip = 0,
  pageSize = 10,
}: {
  skip?: number;
  pageSize?: number;
}) => {
  //   const skip = (page - 1) * pageSize;
  const url = `${BASE_URL}&skip=${skip}&limit=${pageSize}`;
  const response = await fetch(url);
  const data = await response.json();
  const total = data.total;

  const products = data.products as ProductProps[];

  return {
    total,
    products: products.map((product) => Product({ product })),
  };
};
