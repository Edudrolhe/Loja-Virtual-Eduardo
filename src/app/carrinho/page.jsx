
import Header from "../../components/Header";
import CarrinhoResumo from "../../components/CarrinhoResumo";
import "../../styles/carrinho.css";

export default function Carrinho() {
  return (
    <>
      <Header />
      <main className="carrinho container">
        <h1>Seu Carrinho</h1>
        <CarrinhoResumo />
      </main>
    </>
  );
}
