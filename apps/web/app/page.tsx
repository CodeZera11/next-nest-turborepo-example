import { Product } from "@repo/types"
import CreateProduct from "./create-product/create-product";

export const dynamic = "force-dynamic";

export default async function Home() {

  const response = await fetch("http://localhost:4000/products", {
    next: { tags: ["products"] }
  })
  const products: Product[] = await response.json();

  return (
    <div>
      <CreateProduct />
      {products?.map(item => {
        return <div key={item.id}>
          {item.name} - {item.price} - {item.id}
        </div>
      })}
    </div>
  );
}
