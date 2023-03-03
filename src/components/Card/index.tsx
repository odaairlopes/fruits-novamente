import "./styles.css";
import Modal from "../Modal";
import { useState } from "react";
import { IFruitList } from "../../types/fruits";
import { useNavigate } from "react-router-dom";

const Card = ({ fruits }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = (fruit: IFruitList) => {
    window.localStorage.setItem("fruit", JSON.stringify(fruit));
    //setIsOpen(true);
    navigate("/fruits-details");
  };

  return (
    <div className="container-cards">
      {fruits &&
        fruits.map((fruit: IFruitList) => (
          <div
            className="container-card"
            key={fruit.name}
            onClick={() => handleClick(fruit)}
          >
            <div className="card-header">
              <p className="card-name">{fruit.name}</p>
            </div>

            <img
              src={`${fruit.photo}`}
              className="card-photo"
              alt={fruit.name}
            />
          </div>
        ))}
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Card;
