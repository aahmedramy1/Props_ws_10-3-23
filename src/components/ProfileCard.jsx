import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProfileCard = ({ title, description }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/300/200" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
