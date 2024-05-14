import Header from "@/components/header";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js Storage 이미지 업로드 웹앱",
  description: "beyond ZERO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-background text-foreground">
        <Header></Header>
        <main className="min-h-screen flex flex-col items-center px-2">
          {children}
        </main>
      </body>
    </html>
  );
}
