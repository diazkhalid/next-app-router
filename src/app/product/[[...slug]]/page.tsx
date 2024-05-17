type ProductPageProps = {
  params: {
    slug: string[];
  };
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "force-cache",
    next: {
      tags: ["products"],
    },
  });

  if (!res.ok) {
    return {
      status: res.status,
      messsage: res.statusText,
    };
  }
  return res.json();
};

export default async function ProductPage({ params }: ProductPageProps) {
  const products = await getData();

  return (
    <div>
      <div className="w-full flex justify-center py-5 font-bold text-2xl">
        <h1>{params.slug ? "Detail Product Page" : "Products Page"}</h1>
      </div>
      <div className="grid grid-cols-4 place-items-center gap-5">
        {products.data.length > 0 &&
          products.data.map((product: any) => {
            return (
              <div
                key={product.id}
                className="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="p-4">
                  <div className="overflow-hidden rounded-lg mb-3">
                    <a href="#">
                      <img
                        className="rounded-t-lg h-96 w-full object-cover"
                        src={product.image}
                        alt="product image"
                      />
                    </a>
                  </div>
                </div>
                <div className="px-5 pb-5 justify-between">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                      {product.title}
                    </h5>
                  </a>
                  <div className="flex items-center justify-between mt-5">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </span>
                    <a
                      href="#"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </a>
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
