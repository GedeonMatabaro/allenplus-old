


import { Google } from "arctic";
import { cookies } from "next/headers";
import { cache } from "react";
import { deleteSessionTokenCookie, setSessionTokenCookie, validateSessionToken } from "./auth_session";
import type { NextRequest } from "next/server";
import { UserData } from "./lib/types";
import { Session } from "@prisma/client";

 //had to add this to make sure it can deploy. Vercel does not allow my personal git push to be deployed on
 // the organisation's acc without a pro subscription

interface DatabaseUserAttributes {
    id: string, 
    username: string, 
    displayName: string, 
    avatarUrl: string|null, 
    googleId: string|null,
}

export interface SessionData {
    user: UserData;
    session: Session;
}

const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/google`;

export const google = new Google(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    redirectUrl,
);

export const validateRequest = cache(async (): Promise<{ user: UserData, session: Session } | { user: null, session: null }> => {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value ?? null;
    if (token === null) {
        return { session: null, user: null };
    }
    const result = await validateSessionToken(token);
        try{
            if(result.session && Date.now() <= result.session.expiresAt.getTime()){
                await setSessionTokenCookie(token, result.session.expiresAt);
            }
            if(!result.session){
                await deleteSessionTokenCookie();
            }
        } catch {}

        return result;
    },
)