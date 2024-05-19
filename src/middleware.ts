import { NextRequest, NextResponse } from "next/server";

export default function Middleware(request: NextRequest) {
  const login = false;

  if (!login) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/about/:path*"],
};
