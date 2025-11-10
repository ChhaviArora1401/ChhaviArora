// app/layout.jsx
import "./globals.css";
import Wrapper from "./Wrapper";

export const metadata = {
  title: "Chhavi Arora",
  description: "A Next.js app with dark mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}