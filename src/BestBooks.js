import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

let bookArr = [];
// const booksdata = [];
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
    console.log('HELLO WORLD!')
  }


  getBooks = async () => {
    let apiUrl = `${SERVER}/books`;
    console.log(apiUrl);
    const response = await axios.get(apiUrl);
    this.setState({ books: response.data });
    console.log(response.data[0].title);

  }




  render() {
    console.log('books');

    // /* TODO: render user's books in a Carousel */

    console.log(this.state.books[0]);

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length ? (
          <Carousel>
            {this.state.books.map((book, idx) => (
              <Carousel.Item key={idx}>
                  <img src="https://via.placeholder.com/150" alt="coming soon"/>
                <Carousel.Caption>
                  <h2>{book.title} </h2>
                  <p>{book.description}</p>
                </Carousel.Caption>

              </Carousel.Item>

            ))}

          </Carousel>
        ) : (
          <h3>No Books Found </h3>
        )}
      </>
    )
  }
}

export default BestBooks;
