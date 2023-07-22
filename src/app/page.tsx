import ProductList from "@/components/productList/ProductList";
import { Suspense } from "react";

type Props = {
  searchParams: { page?: string };
};

export default function Home({ searchParams }: Props) {
  return (
    <div className="min-h-screen p-8">
      <div className="bg-slate-500 font-neutral-100 p-4">Header</div>
      <div className="max-w-2xl mx-auto">
        <Suspense
          fallback={<div className="bg-amber-300 text-black">Fallback</div>}
        >
          <ProductList searchParams={searchParams} />
        </Suspense>
      </div>
      <div className="bg-slate-500 font-neutral-100 p-4">Footer</div>
    </div>
  );
}
