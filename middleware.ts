import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Initializing the next-intl middleware with the routing configuration
// This middleware will handle locale detection and redirection based on the routing configuration
const intlMiddleware = createMiddleware(routing);


export async function middleware(request: NextRequest): Promise<NextResponse> {
    // Step 1: Call the next-intl middleware to handle locale detection and redirection
    const response = await intlMiddleware(request); 
    // Step 2: Handle GET requests: Extend session cookie expiration
    if (request.method === "GET") {
        // For GET requests, extend the session cookie if it exists
        const token = request.cookies.get("session")?.value ?? null;
        if (token !== null) {
          response.cookies.set("session", token, {
            path: "/",
            maxAge: 60 * 60 * 24 * 30, // 30 days
            sameSite: "lax",
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
          });
        }
    } else {
        // For non-GET requests, validate Origin and Host headers
        const originHeader = request.headers.get("Origin");
        const hostHeader = request.headers.get("Host");
    
        if (!originHeader || !hostHeader) {
          return new NextResponse(null, {
            status: 403,
            statusText: "Forbidden: Missing Origin or Host headers",
          });
        }
    
        try {
          const origin = new URL(originHeader);
          if (origin.host !== hostHeader) {
            return new NextResponse(null, {
              status: 403,
              statusText: "Forbidden: Origin does not match Host",
            });
          }
        } catch (error) {
          return new NextResponse(null, {
            status: 403,
            statusText: "Forbidden: Invalid Origin header",
          });
        }
    }
    
    // Step 3: Return the response (either modified or from next-intl)
    return response;
}
// Configuration to specify which paths the middleware applies to
export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
