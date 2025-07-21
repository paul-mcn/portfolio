import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/cursor/CustomCursor";
import { GlobalStoreProvider } from "@/providers/GlobalStoreProvider";

const font = Lexend({
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paul McNamara Software",
  description: "TODO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} relative`}>
        <GlobalStoreProvider>
          <CustomCursor>{children}</CustomCursor>
        </GlobalStoreProvider>
      </body>
    </html>
  );
}
