import { useRouter } from "next/router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <Card className="mb-3 shadow-lg border border-secondary">
      <Card.Img variant="top" src={props.image} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-3">{props.address}</Card.Subtitle>
        <Button variant="primary" onClick={showDetailsHandler}>
          Show Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MeetupItem;
