import NextAuth from "next-auth";
import { NextResponse } from "next/server";

import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const hostname = req.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];

  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // 🔐 Allow NextAuth API routes
  if (isApiAuthRoute) return NextResponse.next();

  // 🔁 Redirect logged-in users away from login/signup
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next();
  }

  // 🔒 Require auth for private routes
  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) callbackUrl += nextUrl.search;

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return Response.redirect(new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));
  }

  // 🌐 Handle subdomains like `restaurant.enerzyflow.com`
  if (
    subdomain &&
    subdomain !== "www" &&
    subdomain !== "enerzyfow" &&
    !nextUrl.pathname.startsWith("/restaurant/")
  ) {
    const url = nextUrl.clone();
    url.pathname = `/restaurant/${subdomain}${nextUrl.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
});

// ✅ Match all routes except static files/_next/api
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
