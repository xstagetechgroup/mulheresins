import type { Metadata } from "next";
import "./globals.css";

/* const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
 */
export const metadata: Metadata = {
  title: "Associação de Mulheres Instruídas",
  description: "A Resiliência não é ser forte o tempo todo. É saber levantar-se com propósito."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
