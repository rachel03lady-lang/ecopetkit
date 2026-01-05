"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Product = {
  id: string;
  name: string;
  slug: string;
};

type Props = {
  products: Product[];
};

export default function GetAQuoteForm({ products }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mt-8">
      <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
        Get a Quote
      </h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-accent focus:border-accent text-xs placeholder:text-slate-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-accent focus:border-accent text-xs placeholder:text-slate-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <input
              type="text"
              id="country"
              placeholder="Country"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-accent focus:border-accent text-xs placeholder:text-slate-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-accent focus:border-accent text-xs placeholder:text-slate-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="company" className="sr-only">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            placeholder="Company Name"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-accent focus:border-accent text-xs placeholder:text-slate-500"
          />
        </div>
        <div className="relative">
          <label htmlFor="product" className="sr-only">
            Please choose
          </label>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-left text-slate-500 text-xs placeholder:text-slate-500"
          >
            <span>
              {selectedProduct
                ? selectedProduct.name
                : "Please choose a product"}
            </span>
            <ChevronDown
              size={20}
              className={`transform transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isOpen && (
            <ul className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {products.map((product) => (
                <li
                  key={product.id}
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
                >
                  {product.name}
                </li>
              ))}
              <li
                onClick={() => {
                  setSelectedProduct({
                    id: "other",
                    name: "Other",
                    slug: "other",
                  });
                  setIsOpen(false);
                }}
                className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
              >
                Other
              </li>
            </ul>
          )}
        </div>
        <div>
          <label htmlFor="details" className="sr-only">
            Enter product details or other specific requirements
          </label>
          <textarea
            id="details"
            rows={4}
            placeholder="Enter product details or other specific requirements to receive an accurate quote."
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-accent focus:border-accent text-xs placeholder:text-slate-500"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
