import "./globals.css";
import Header from "./components/layout/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-dvh bg-brand-black text-brand-white font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
