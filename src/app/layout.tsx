import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "annie",
  description: "hello world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="grid grid-rows-[20px_1fr_20px] min-h-screen p-12 pb-20 sm:gap-16 sm:px-24 sm:py-24 md:px-36 lg:px-48 antialiased" // items-center justify-items-center
      >
        <header>
        </header>
        <div className="grid grid-cols-1 h-min">
          <main className="p-4">
            {children}
          </main>
        </div>
        <footer>
        </footer>
      </body>
    </html>
  );
}