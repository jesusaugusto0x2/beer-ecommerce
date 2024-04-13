import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.scss";
import cx from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beer e-commerce",
  description: "The best loquor e-commerce you can find around!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(inter.className, styles.Layout)}>{children}</body>
    </html>
  );
}
