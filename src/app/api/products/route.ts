import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "MacBook Pro",
    price: 20000000,
    image:
      "https://m.media-amazon.com/images/I/81Jp6ol-1kL._AC_UF350,350_QL80_.jpg",
  },
  {
    id: 2,
    title: "iPhone 15 Pro Max",
    price: 23000000,
    image:
      "https://cworld.id/wp-content/uploads/2023/10/ID_iPhone_15_Pro_Blue_Titanium_PDP_Image_Position-1A_Blue_Titanium_Color-scaled.jpg",
  },
  {
    id: 3,
    title: "Playstation 5",
    price: 8000000,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 4,
    title: "Lenovo Legion 5 Pro",
    price: 27000000,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/20/3400450d-1dcc-4eb7-832b-c80fef70b373.jpg",
  },
  {
    id: 5,
    title: "Lenovo Legion 5",
    price: 15000000,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/20/3400450d-1dcc-4eb7-832b-c80fef70b373.jpg",
  },
  {
    id: 5,
    title: "Lenovo Legion 7 Slim",
    price: 30000000,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/20/3400450d-1dcc-4eb7-832b-c80fef70b373.jpg",
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ status: 200, message: "success", data });
  }

  const dataValid = data.find((item) => item.id === parseInt(id));

  if (!dataValid) {
    return NextResponse.json({ status: 404, message: "Not Found", data: {} });
  }
  return NextResponse.json({
    status: 200,
    message: "success",
    data: dataValid,
  });
}
