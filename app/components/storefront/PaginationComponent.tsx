

"use client";  

import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";  

const PaginationComponent = ({ items, itemsPerPage }: { items: any[], itemsPerPage: number }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedItems, setPaginatedItems] = useState<any[]>([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedItems(items.slice(startIndex, endIndex));
  }, [currentPage, items, itemsPerPage]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {paginatedItems.map((item: any) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>

     
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition disabled:opacity-50"
        >
          Prev
        </button>

        
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={cn(
              "px-4 py-2 rounded transition-colors",
              currentPage === index + 1
                ? "bg-primary text-white" 
                : "bg-gray-200 text-black hover:bg-gray-300"
            )}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
