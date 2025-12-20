
import { Suspense } from "react";
import {
  IndustryInsights,
  ProductPage,
  ProductFAQ,
} from "@/components/products";
export default function Product(){
    return (
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductPage />
        </Suspense>
        <IndustryInsights />
        <ProductFAQ />
      </main>
    );
}