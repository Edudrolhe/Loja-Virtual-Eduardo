
import ProdutoCard from "./ProdutoCard";

export default function GridProdutos({ produtos }) {
  return (
    <div className="grid-produtos">
      {produtos.map((p) => (
        <ProdutoCard key={p.id} produto={p} />
      ))}
    </div>
  );
}
