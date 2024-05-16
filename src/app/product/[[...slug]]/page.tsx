export default function DetailProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  return (
    <div>
      <h1>{params.slug ? "Detail Product Page" : "Products Page"}</h1>
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
