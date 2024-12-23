import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function MeetupDetail(props) {
  return (
    <Container>
      <Card className="shadow-lg">
        <Card.Img variant="top" src={props.image} alt={props.title} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-3">{props.address}</Card.Subtitle>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary" href="/">
            Back
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MeetupDetail;
