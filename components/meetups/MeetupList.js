import MeetupItem from "./MeetupItem";
import ListGroup from "react-bootstrap/ListGroup";

function MeetupList(props) {
  return (
    <ListGroup>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ListGroup>
  );
}

export default MeetupList;
