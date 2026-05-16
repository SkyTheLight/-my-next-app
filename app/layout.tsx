import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import styles from "./shadow.module.css";

export const metadata: Metadata = {
  title: "Next App",
  description: "Shadow Monarch's domain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
