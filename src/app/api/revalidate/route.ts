import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_CODE) {
    return NextResponse.json(
      {
        status: 401,
        message: "Invalid secret code",
      },
      { status: 401 }
    );
  }

  if (!tag) {
    return NextResponse.json(
      {
        status: 400,
        message: "Missing Tag Params",
      },
      { status: 400 }
    );
  }

  revalidateTag(tag);

  return NextResponse.json({ status: 201, revalidate: true, now: new Date() });
}
