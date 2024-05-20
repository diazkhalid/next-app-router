import { getData } from "@/services/products";

export default async function DetailProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { data } = await getData(`http://localhost:3000/api/products?id=${id}`);
  return (
    <div className="flex justify-center my-10 items-center">
      <div className="flex flex-col w-1/2 border border-gray-700 justify-center p-5">
        <div className="flex justify-center items-center">
          <img
            src={data.image}
            alt="Product"
            className="h-96 w-50 object-cover"
          />
        </div>
        <div className="mt-3">
          <h1>{data.title}</h1>
          <p>
            Price: Rp.{" "}
            {data.price.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
