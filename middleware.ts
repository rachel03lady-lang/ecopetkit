import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define your supported languages
const locales = ["en-us", "de", "fr", "es"];
const defaultLocale = "en-us";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Check if the path already starts with a locale (e.g., /de/home)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 2. If it has a locale, let it pass through
  if (pathnameHasLocale) return;

  // 3. If NO locale (e.g. visited localhost:3000/), redirect to default (localhost:3000/en-us)
  const locale = defaultLocale;

  // Construct new URL: http://localhost:3000/en-us
  const newUrl = new URL(`/${locale}${pathname}`, request.url);

  // Return 308 Permanent Redirect (Best for SEO)
  return NextResponse.redirect(newUrl);
}

export const config = {
  // Matcher: Run middleware on all paths EXCEPT internal Next.js files, images, favicons, etc.
  matcher: ["/((?!_next|favicon.ico|api|.*\\..*).*)"],
};
