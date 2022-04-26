import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import WarningSign from "./components/WarningSign";
// import MyBadge from "./components/MyBadge";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import { Container, Row, Col } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {

  state = {
    asin: ''
  }

  render() {

    return (
      <div className="App">
      <Container>
        <Row>
          <header className="App-header">
            {/* <WarningSign text="Watch out again!" /> */}
            {/* <MyBadge text="NEW!!" color="info" /> */}
            {/* <SingleBook book={fantasyBooks[0]} /> */}
            <Col md={8}>
            <BookList books={fantasyBooks} />
            </Col>
          <Col md={4}>
          <CommentArea asin={this.state.asin} />
          </Col>
          </header>
        </Row>
      </Container>
    </div>
  )}}

export default App;
