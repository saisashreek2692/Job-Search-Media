import { Jost } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Job Search Media",
  description:
    "Job Search Media is a platform where students, organisations can come together at one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Providers>
          <div className="dark:bg-dark">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
