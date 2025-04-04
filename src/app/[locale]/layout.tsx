import Navbar from "@/components/Navbar";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  
  const {locale} = await Promise.resolve(params);

  if (!locale) {
    throw new Error("Locale is missing in the URL params.");
  }
  const messages = await getMessages({ locale });


  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="mx-auto max-w-4xl h-screen">
            <Navbar locale={locale} />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}