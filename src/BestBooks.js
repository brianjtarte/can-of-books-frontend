import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

const books = [];
const booksdata = [];
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
    console.log('api');
    if (status) {
      apiUrl += `?status=${status}`;
    }

    try {
      const response = await axios.get(apiUrl);
      this.setState({ books: response.data });
      booksdata.push(response.data);
      
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
    console.log('books');
    /* TODO: render user's books in a Carousel */
    // booksdata.map(element => {
    //   let book = <Carousel.Item>{this.state.books.title}
    //   <Carousel.Caption>{this.state.books.description}</Carousel.Caption></Carousel.Item>;
    //   books.push(book);
    // });
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length ? (
          <Carousel>
           {books} 
        </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
