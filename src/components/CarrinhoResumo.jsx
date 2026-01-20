
"use client";
import { useCarrinho } from "../context/CarrinhoContext";
import { formatarBRL } from "../utils/moeda";

export default function CarrinhoResumo() {
  const { itens, incrementar, decrementar, remover, total } = useCarrinho();

  // FUNÇÃO PARA ABRIR WHATSAPP
  // -------------------------
  const enviarWhatsApp = () => {
    const numero = "5511971604273"; 

    // Monta a mensagem com os itens
    let mensagem = "Olá! Quero finalizar minha compra:%0A%0A";

    itens.forEach((item) => {
      mensagem += `• ${item.nome} (Qtd: ${item.quantidade}) - ${formatarBRL(
        item.preco
      )}%0A`;
    });

    mensagem += `%0ATotal: ${formatarBRL(total)}`;

   
    const url = `https://wa.me/${numero}?text=${mensagem}`;

    
    window.open(url, "_blank");
  };

  // -------------------------

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
                <button className="remover" onClick={() => remover(item.id)}>
                  Remover
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* RESUMO */}
      <aside className="resumo">
        <h4>Resumo do pedido</h4>
        <div className="linha">
          <span>Total</span>
          <strong>{formatarBRL(total)}</strong>
        </div>

        {/* BOTÃO DE FINALIZAR */}
        <button className="btn" onClick={enviarWhatsApp}>
          Finalizar compra via WhatsApp
        </button>
      </aside>
    </div>
  );
}
