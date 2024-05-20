import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";

export default async function DetailProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { data } = await getData(`http://localhost:3000/api/products?id=${id}`);
  return (
    <Modal>
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
    </Modal>
  );
}
