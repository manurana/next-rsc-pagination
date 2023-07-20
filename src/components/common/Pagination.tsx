"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  numPages: number;
  activePage?: number;
};

const Pagination = ({ numPages, activePage }: Props) => {
  const pathname = usePathname();

  return Array.from({ length: numPages }).map((_, i) => {
    const page = i + 1;
    return (
      <Link
        key={page}
        href={{
          pathname,
          query: { page },
        }}
      >
        <span
          className={`mr-2 ${page === activePage ? "font-bold text-xl" : null}`}
        >
          {page}
        </span>
      </Link>
    );
  });
};

export default Pagination;
