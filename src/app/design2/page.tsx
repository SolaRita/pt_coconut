"use client";
import TreatmentCard from "../components/tratment-card";
import { fetchProduct } from "@/services/fetchProducts";
import { useEffect, useState } from "react";

export default function Design2() {
  const [product, setProduct] = useState<Treatment>({
    handle: "",
    id: 0,
    main_shopify_id: "",
    title: "",
    variants: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProduct();
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        setError(error as null);
        setLoading(false);
      }
    };

    getProduct();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="text-xl font-bold mb-8">CHOOSE YOUR TREATMENT:</h1>
      {product && (
        <div className="grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 gap-9">
          <TreatmentCard {...product} />
        </div>
      )}
    </>
  );
}
