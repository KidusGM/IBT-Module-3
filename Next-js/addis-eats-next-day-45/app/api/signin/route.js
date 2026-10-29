
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();

  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const next = String(formData.get("next") || "/orders");

  if (email !== "user@example.com" || password !== "password123") {
    return new NextResponse(
      `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <title>Sign In Failed</title>
          </head>
          <body>
            <h1>Sign In Failed</h1>
            <p>Invalid email or password.</p>
            <p><a href="/signin">Try again</a></p>
          </body>
        </html>
      `,
      {
        status: 401,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      }
    );
  }

  if (
    typeof next !== "string" ||
    !next.startsWith("/") ||
    next.startsWith("//")
  ) {
    return NextResponse.redirect(
      new URL("/orders", request.url)
    );
  }

  const response = NextResponse.redirect(
    new URL(next, request.url)
  );

  response.cookies.set("session", "demo-user-1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
