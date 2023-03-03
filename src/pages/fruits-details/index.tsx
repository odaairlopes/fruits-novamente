import "./styles.css";
import { IFruitList } from "../../types/fruits";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const FruitsDetails = () => {
  const navigate = useNavigate();
  const fruit = window.localStorage.getItem("fruit") || "";
  const correctFruit: IFruitList = JSON.parse(fruit);

  const onGoBack = () => {
    window.localStorage.removeItem("fruit");
    navigate("/fruits");
  };
  return (
    <div className="container-details">
      <h1>Detalhes da fruta</h1>
      <div className="content-details">
        <div className="close-modal">
          <button className="button-back" title="Voltar" onClick={onGoBack}>
            <FaArrowLeft size={22} />
          </button>
        </div>
        <div className="details-fruit-div">
          <img
            className="img-modal"
            src={correctFruit.photo}
            alt={correctFruit.name}
          />

          <p>Nome: {correctFruit.name}</p>
          <p>Gorduras: {correctFruit.blubber}</p>
          <p>Calorias: {correctFruit.calories}</p>
          <p>Proteínas: {correctFruit.protein}</p>
          <p>Carboidratos: {correctFruit.carbohydrates}</p>
          <p>Fibras: {correctFruit.fiber}</p>
          <p>Porção recomendada{correctFruit.portion}</p>
        </div>
      </div>
    </div>
  );
};

export default FruitsDetails;
