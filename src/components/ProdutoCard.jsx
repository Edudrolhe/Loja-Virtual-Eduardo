
import Link from "next/link";
import { formatarBRL } from "../utils/moeda";

export default function ProdutoCard({ produto }) {
  return (
    <Link href={`/produto/${produto.id}`} className="produto-card">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p className="preco">{formatarBRL(produto.preco)}</p>
    </Link>
  );
}
