"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { sendFormData } from "@/lib/getForms";


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
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");

  const FORM_ID: string = process.env.NEXT_PUBLIC_QUOTATION_FORM_ID || "";
  const FORM_POST_ID: string =
    process.env.NEXT_PUBLIC_QUOTATION_FORM_POST_ID || "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //set status submitting
    setStatus("submitting");
    //create a form data directly from the form event
    const formData = new FormData(e.currentTarget);
    //call the server action
    const result = await sendFormData(formData, FORM_ID, FORM_POST_ID);
    //handle rest api respone
    console.log("API Result =>", result);
    if(result?.status === "mail_sent")
    {
      setStatus("success");
      setMessage(result?.message);
      (e.target as HTMLFormElement).reset()
       window.setTimeout(() => {
         setMessage("");
       }, 3000);
    }
    else{
      setStatus("error");
      setMessage(result?.message || "An unexpected error occured.");
      
      window.setTimeout(()=>{
        setMessage("");
      },3000)
    }
  };
 console.log("Message=>", message);
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mt-8">
      <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
        Get a Quote
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="your-name"
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
              name="email"
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
              name="country"
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
              name="phone"
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
            name="company"
            placeholder="Company Name"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-accent focus:border-accent text-xs placeholder:text-slate-500"
          />
        </div>
        <div className="relative">
          <label htmlFor="product" className="sr-only">
            Please choose
          </label>
          <input
            type="hidden"
            name="product"
            value={selectedProduct ? selectedProduct.name : ""}
          />
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
            <ul className="absolute text-sm z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
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
            name="details"
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
          {status === "submitting" && (
            <p className="pt-3 text-sm">Sending message, please wait !!!</p>
          )}
          {message && (
            <p
              className={`${
                status === "success" ? "text-green-600" : "text-red-600"
              } pt-3 text-sm`}
            >
              {message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
