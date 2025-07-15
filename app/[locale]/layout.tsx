// import { notFound, redirect } from "next/navigation";

// import { NextIntlClientProvider, hasLocale } from "next-intl";
// import { routing } from "@/i18n/routing";

// export default async function Layout({
//   children,
//   params,
// }: Readonly<{
//   children: React.ReactNode;
//   params: Promise<{ locale: string }>;
// }>) {
//   const { locale } = await params;
//     if (!hasLocale(routing.locales, locale)) {
//       notFound();
//     }
//   return <>
//       <NextIntlClientProvider>
//         {children}
//       </NextIntlClientProvider>
//     </>
// }
import { notFound, redirect } from "next/navigation";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
      notFound();
    }
  return <>
      <NextIntlClientProvider>
        {children}
      </NextIntlClientProvider>
    </>
}