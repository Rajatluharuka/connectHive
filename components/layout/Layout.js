import MainNavigation from "./MainNavigation";
import Container from "react-bootstrap/Container";

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <Container className="py-4">{props.children}</Container>
    </>
  );
}

export default Layout;
