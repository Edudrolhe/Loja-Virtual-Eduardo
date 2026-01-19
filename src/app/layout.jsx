
import "../styles/globals.css";
import CarrinhoProvider from "../context/CarrinhoContext";


export const metadata = {
  title: "capputeeno",
  description: "Loja exemplo Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <CarrinhoProvider>
          {children}
        </CarrinhoProvider>
      </body>
    </html>
  );
}
