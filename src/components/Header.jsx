
"use client";
import Link from "next/link";
import { useCarrinho } from "../context/CarrinhoContext";

export default function Header() {
  const { totalItens } = useCarrinho();
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link href="/" className="logo">MinhaLoja</Link>
        <nav className="menu">
          <Link href="/">Catálogo</Link>
          <Link href="/carrinho" className="carrinho-link">🛒 <span>{totalItens}</span></Link>
        </nav>
      </div>
    </header>
  );
}
