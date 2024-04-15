import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import styles from "./layout.module.scss";
import cx from "classnames";

const dmSans = DM_Sans({ subsets: ["latin"] });

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
      <body className={cx(dmSans.className, styles.Layout)}>{children}</body>
    </html>
  );
}
