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

//some test comment

class App extends Component {

  state = {
    asin: '',
    selected: false
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.asin !== this.state.asin) {
      this.setState({
        ...this.state,
        selected: true 
      })
    }
  }



  changeSelected = (value) => {
    this.setState({selected: value})
  }

  getAndSetAsin = (newAsin) => {
    this.setState({
      ...this.state,
      asin: newAsin
    })
  }

  render() {

    return (
      <div className="App">
      <Container>
        <Row>
          {/* <header className="App-header"> */}
            {/* <WarningSign text="Watch out again!" /> */}
            {/* <MyBadge text="NEW!!" color="info" /> */}
            {/* <SingleBook book={fantasyBooks[0]} /> */}
            <Col md={8}>
            <BookList 
            books={fantasyBooks} 
            getAndSetAsin={this.getAndSetAsin}
            />
            </Col>
          <Col md={4}>
          <CommentArea 
            asin={this.state.asin}
            changeSelected={this.changeSelected}
            currentSelectedValue={this.state.selected}
          />
          </Col>
          {/* </header> */}
        </Row>
      </Container>
    </div>
  )}}

export default App;
