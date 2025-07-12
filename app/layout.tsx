import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Leaf, Mail, MapPin } from "lucide-react"
import Footer from "@/components/Footer"
import { NextIntlClientProvider } from "next-intl"
import { ThemeProvider } from "next-themes"
import ReactQueryProvider from "./[locales]/contextProviders/ReactQueryProvider"
import { fileRouter } from "./api/uploadthings/core"
import { extractRouterConfig } from "uploadthing/server"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { validateRequest } from "@/auth"
import SessionProvider from "./[locales]/contextProviders/SessionProvider"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ALLEN+ | Aid Life Learn Environment",
  description:
    "Empowering communities through sustainable development, climate action, and humanitarian support in Eastern DRC and beyond.",
    generator: 'v0.dev'
}



export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { user, session } = await validateRequest();
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <SessionProvider value={{ user, session }}>
          <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
          <ReactQueryProvider>
            <ThemeProvider
              attribute="class" 
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
                <NextIntlClientProvider>
                  {children}
                </NextIntlClientProvider>
            </ThemeProvider>
          </ReactQueryProvider>

          </SessionProvider>
      </body>
    </html>
  )
}
