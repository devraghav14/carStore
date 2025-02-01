"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search as SearchIcon, X as ClearIcon } from "lucide-react";


interface Product {
    id: string;
    name: string;
    images: string[]; 
}

export function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<Product[]>([]); 
    const [showDropdown, setShowDropdown] = useState(false);

    // Fetch search results
    useEffect(() => {
        if (searchTerm.length < 2) {
            setSuggestions([]);
            setShowDropdown(false);
            return;
        }

        const fetchSuggestions = async () => {
            const res = await fetch(`/api/search?q=${searchTerm}`);
            const data = await res.json();
            setSuggestions(data.results);
            setShowDropdown(data.results.length > 0);
        };

        const debounceTimeout = setTimeout(fetchSuggestions, 300); 
        return () => clearTimeout(debounceTimeout);
    }, [searchTerm]);

    return (
        <div className="relative w-64">
            
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
                <SearchIcon className="w-5 h-5 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search cars..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="ml-2 w-full outline-none"
                />
                {searchTerm && (
                    <ClearIcon className="w-5 h-5 text-gray-500 cursor-pointer" onClick={() => setSearchTerm("")} />
                )}
            </div>

           
            {showDropdown && (
                <div className="absolute w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-lg z-50">
                    {suggestions.map((product) => (
                        <Link key={product.id} href={`/products/${product.id}`} className="flex items-center p-2 hover:bg-gray-100">
                            <Image src={product.images[0]} alt={product.name} width={40} height={40} className="rounded-md object-cover" />
                            <span className="ml-3">{product.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
