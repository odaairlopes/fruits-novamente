import { Dispatch, SetStateAction } from "react";
import "./styles.css";
import { IFruitList } from "../../types/fruits";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ setIsOpen }: ModalProps) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  const fruit = window.localStorage.getItem("fruit") || "";

  const correctFruit: IFruitList = JSON.parse(fruit);

  return (
    <div className="modal">
      <div className="close-modal">
        <button onClick={handleClose}>X</button>
      </div>
      <img className="img-modal" src={correctFruit.photo} alt={correctFruit.name} />
      <div>
      <p>Nome: {correctFruit.name}</p>
      <p>Gorduras: {correctFruit.blubber}</p>
      <p>Calorias: {correctFruit.calories}</p>
      <p>Proteínas: {correctFruit.protein}</p>
      <p>Carboidratos: {correctFruit.carbohydrates}</p>
      <p>Fibras: {correctFruit.fiber}</p>
      <p>Porção recomendada{correctFruit.portion}</p>
      </div>
    </div>
  );
};

export default Modal;
