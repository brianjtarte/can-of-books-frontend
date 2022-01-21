import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap/lib/Tab';

const SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */


  componentDidMount() {
    this.getBooks();
  }

  async getBooks(status = null) {
    let apiUrl = `${SERVER}/books`;

    if (status) {
      apiUrl += `?status=${status}`;
    }

    try {
      const response = await axios.get(apiUrl);
      this.setState({ books: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  handleStatusSubmit = (event) => {
    event.preventDefault();
    const status = event.target.status.value;
    console.log({ status });
    this.getBooks(status);
  }

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
</>

        {this.state.books.length ? (
          <>
          <p>Book Carousel coming soon</p>
          
          <Container>
          <Carousel>
          <Carousel.Item>
            
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Container>
        </>
        ) : (
          <h3>No Books Found :(</h3>
        )}


      
    )
  }
}

export default BestBooks;
