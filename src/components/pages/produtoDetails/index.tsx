import { useParams } from "react-router-dom";


export const ProdutoDetail = () => {
  const params = useParams()
  return (
    <div>
      <h1>Produto {params.id}..</h1>
    </div>
  );
};
