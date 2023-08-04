import { Link } from "react-router-dom";

export const Produtos = () => {
  return (
    <div>
      <h1>Produtos..</h1>
      <nav>
        <Link to="/produto/1">Produto 1</Link>
        <Link to="/produto/2">Produto 2</Link>
      </nav>
    </div>
  );
};
