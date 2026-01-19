
"use client";
import { useCarrinho } from "../context/CarrinhoContext";
import { formatarBRL } from "../utils/moeda";

export default function CarrinhoResumo() {
  const { itens, incrementar, decrementar, remover, total } = useCarrinho();

  if (itens.length === 0) {
    return <p>Seu carrinho está vazio.</p>;
  }

  return (
    <div className="carrinho-wrapper">
      <ul className="lista-itens">
        {itens.map((item) => (
          <li key={item.id} className="item">
            <img src={item.imagem} alt={item.nome} />
            <div className="detalhes">
              <h3>{item.nome}</h3>
              <p>{formatarBRL(item.preco)}</p>
              <div className="qtd">
                <button onClick={() => decrementar(item.id)}>-</button>
                <span>{item.quantidade}</span>
                <button onClick={() => incrementar(item.id)}>+</button>
                <button className="remover" onClick={() => remover(item.id)}>Remover</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <aside className="resumo">
        <h4>Resumo do pedido</h4>
        <div className="linha"><span>Total</span><strong>{formatarBRL(total)}</strong></div>
        <button className="btn">Finalizar compra</button>
      </aside>
    </div>
  );
}
