import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { detectLocaleFromHeader, isLocale } from "@/lib/i18n/locales";

function isPublicFile(pathname: string) {
  return /\.[^/]+$/.test(pathname);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    isPublicFile(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isLocale(firstSegment)) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const locale = detectLocaleFromHeader(request.headers.get("accept-language"));
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
