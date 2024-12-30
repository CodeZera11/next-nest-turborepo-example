"use server";

import { revalidateTag } from "next/cache";

export default async function createProduct(formData: FormData) {
  const response = await fetch("http://localhost:4000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  revalidateTag("products");
}
