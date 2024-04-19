"use client";
import Link from "next/link";
import ProductCard from "./components/product-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-16">
      <Link href="/design2">Design 2</Link>
      <Link href="/design3">Design 3</Link>
    </main>
  );
}
