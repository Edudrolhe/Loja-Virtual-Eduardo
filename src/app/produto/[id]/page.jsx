"use client"; // <--- TEM QUE SER NA LINHA 1

import { useState } from "react";
import { produtos } from "../../../data/produtos";
import Header from "../../../components/Header";
import Botao from "../../../components/Botao";
import { useCarrinho } from "../../../context/CarrinhoContext";
import { formatarBRL } from "../../../utils/moeda";
import "../../../styles/produto.css";

export default function ProdutoPage({ params }) {
  const produto = produtos.find((p) => String(p.id) === String(params.id));

  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <>
      <Header />
      <ClientProduto produto={produto} />
    </>
  );
}

function ClientProduto({ produto }) {
  const { adicionar } = useCarrinho();
  const [qtd, setQtd] = useState(1);

  return (
    <main className="produto container">
      <div className="imagem"><img src={produto.imagem} alt={produto.nome} /></div>
      <section className="info">
        <h1>{produto.nome}</h1>
        <p className="preco">{formatarBRL(produto.preco)}</p>
        <div className="acoes">
          <input type="number" min="1" value={qtd} onChange={(e) => setQtd(Number(e.target.value))} />
          <Botao onClick={() => adicionar(produto, qtd)} texto="Adicionar ao Carrinho" />
        </div>
      </section>
    </main>
  );
}
