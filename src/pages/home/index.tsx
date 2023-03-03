import "./styles.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Fruit Calories</h1>
      <h4>Leve uma vida + saudável</h4>
      <button className="main-button" onClick={() => navigate("/fruits")}>
        Frutando
      </button>
    </div>
  );
};
export default Home;
