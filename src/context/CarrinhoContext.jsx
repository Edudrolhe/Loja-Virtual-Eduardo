
"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CarrinhoCtx = createContext(null);

export default function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const salvo = localStorage.getItem("carrinho");
    if (salvo) setItens(JSON.parse(salvo));
  }, []);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(itens));
  }, [itens]);

  const adicionar = (produto, quantidade = 1) => {
    setItens((curr) => {
      const existe = curr.find((i) => i.id === produto.id);
      if (existe) {
        return curr.map((i) => (i.id === produto.id ? { ...i, quantidade: i.quantidade + quantidade } : i));
      }
      return [...curr, { ...produto, quantidade }];
    });
  };

  const incrementar = (id) => setItens((c) => c.map((i) => (i.id === id ? { ...i, quantidade: i.quantidade + 1 } : i)));
  const decrementar = (id) => setItens((c) => c.map((i) => (i.id === id ? { ...i, quantidade: Math.max(1, i.quantidade - 1) } : i)));
  const remover = (id) => setItens((c) => c.filter((i) => i.id !== id));

  const totalItens = itens.reduce((acc, i) => acc + i.quantidade, 0);
  const total = itens.reduce((acc, i) => acc + i.preco * i.quantidade, 0);

  const value = useMemo(() => ({ itens, adicionar, incrementar, decrementar, remover, totalItens, total }), [itens, totalItens, total]);
  return <CarrinhoCtx.Provider value={value}>{children}</CarrinhoCtx.Provider>;
}

export const useCarrinho = () => useContext(CarrinhoCtx);
