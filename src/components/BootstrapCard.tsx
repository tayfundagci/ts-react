import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BootstrapModal from "../components/BootstrapModal";

type Props = {
  title: string;
  description: string;
  image: string;
  price: number | string;
};

const BootstrapCard = ({ title, description, image, price }: Props) => {
  return (
    <Card style={{ width: "18rem" }} className="bg-secondary border m-2 p-3">
      <Card.Img
        variant="top"
        src={image}
        className="border border-2 border-success"
        style={{ maxHeight: "150px" }}
      />
      <Card.Body>
        <Card.Title className="text-white">{title}</Card.Title>
        <Card.Text className="text-white">
          {description.slice(0, 40) + "..."}
        </Card.Text>
        <Button
          variant="primary"
          style={{ position: "absolute", left: "40%", bottom: "0" }}
          className="mb-2"
        >
          {price}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BootstrapCard;
