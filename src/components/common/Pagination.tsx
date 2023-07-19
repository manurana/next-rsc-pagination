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
    const pageNumber = i + 1;
    return (
      <Link
        key={pageNumber}
        href={{
          pathname,
          query: { page: pageNumber },
        }}
      >
        <span
          className={`mr-2 ${
            pageNumber === activePage ? "font-bold text-xl" : null
          }`}
        >
          {pageNumber}
        </span>
      </Link>
    );
  });
};

export default Pagination;
