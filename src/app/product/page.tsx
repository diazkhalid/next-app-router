import { getData } from "@/services/products";
import Link from "next/link";

type ProductPageProps = {
  params: {
    slug: string[];
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const products = await getData("http://localhost:3000/api/products");

  return (
    <div>
      {/* <div className="w-full flex justify-center py-5 font-bold text-2xl">
        <h1>{params.slug ? "Detail Product Page" : "Products Page"}</h1>
      </div> */}
      <div className="grid grid-cols-4 place-items-center gap-5 mt-5">
        {products.data.length > 0 &&
          !params.slug &&
          products.data.map((product: any) => {
            return (
              <div
                key={product.id}
                className="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="p-4">
                  <div className="overflow-hidden rounded-lg mb-3">
                    <img
                      className="rounded-t-lg h-96 w-full object-cover"
                      src={product.image}
                      alt="product image"
                    />
                  </div>
                </div>
                <div className="px-5 pb-5 justify-between">
                  <Link href={`/product/detail/${product.id}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate hover:underline">
                      {product.title}
                    </h5>
                  </Link>
                  <div className="flex items-center justify-between mt-5">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </span>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {params.slug && (
        <>
          <h1>Category: {params.slug[0]}</h1>
          <h1>Gender: {params.slug[1]}</h1>
          <h1>id: {params.slug[2]}</h1>
        </>
      )}
    </div>
  );
}
