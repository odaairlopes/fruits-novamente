import Card from "../../components/Card";
import { Header } from "../../components/Header";

const FruitsList = ({ fruits }: any) => {
  return (
    <>
      <Header />
      <Card fruits={fruits} />
    </>
  );
};

export default FruitsList;
