import GridProdutos from "../components/GridProdutos";
import { produtos } from "../data/produtos";
import Header from "../components/Header";
import "../styles/catalogo.css";

export default function Catalogo() {
  return (
    <>
      <Header />
      <main className="catalogo container">
        <h1>Catálogo da Loja</h1>
        <GridProdutos produtos={produtos} />
      </main>
    </>
  );
}
