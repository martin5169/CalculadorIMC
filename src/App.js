import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import TableModel from "./components/TableModel";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <Form></Form>
      <TableModel></TableModel>
      <Footer></Footer>
    </Container>
  );
}

export default App;
