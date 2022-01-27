import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import BookFormModal from './BookFormModal';
import AddBook from './AddBook';
import './Carousel.css';
// import Button from 'react-bootstrap/Button';
import DeleteButton from './DeleteButton';
import FormUpdateModal from './FormUpdateModal';
import UpdateBook from './UpdateBook';

const SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookForm: false,
      updateForm: false,
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  componentDidMount() {
    this.getBooks();
    console.log('HELLO WORLD!')
  }

  bookFormHandler = () => {
    this.setState({
      bookForm: true
    });
  }

  updateHandler = () => {
    this.setState({
      updateForm: true
    });
  }

  onHide = () => {
    this.setState({
      bookForm: false,
      updateForm: false,
    });
  }
  createNewBooks = async (newBookObj) => {
    console.log(newBookObj);
    const response = await axios.post(`${SERVER}/books`, newBookObj);
    console.log(response.data);
    let newBook = response.data;
    this.setState({
      books: [...this.state.books, newBook]
    })
  }
  getBooks = async () => {
    let apiUrl = `${SERVER}/books`;
    console.log(apiUrl);
    const response = await axios.get(apiUrl);
    this.setState({ books: response.data });
    console.log(response.data);

  }


  deleteBook = async (bookId) => {
    console.log('book', bookId);
    const id = bookId._id;
    let newBooks = this.state.books;
    console.log(newBooks);
    newBooks = this.state.books.filter(b => b._id !== id);
    this.setState({ books: newBooks });
    console.log(id);
    const config = {
      params: { email: this.props.user.email },
      method: 'delete',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/books/${id}`
    }
    await axios(config);
    console.log(config);

  }

  onUpdate = async booksToBeUpdated => {
      try {
        await axios.put(`${SERVER}/books/${booksToBeUpdated._id}`, booksToBeUpdated);
        
        const updatedBooks = this.state.books.map(existingBook => {
          if (existingBook._id === booksToBeUpdated._id) {
            return booksToBeUpdated;
          } else {
            return existingBook;
          }
        });
  
        this.setState({
          books: updatedBooks
        })
  
      } catch (error) {
        console.error(error);
      }
    }
  

  render() {

    // /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length ? (
          <Carousel>
            {this.state.books.map((book, idx) => (
              <Carousel.Item key={idx}>
                <img src={book.image} alt="coming soon" />
                <Carousel.Caption>
                  <h2 id="desc">{book.title}</h2>
                  <p>{book.description}</p>
                  <DeleteButton deleteBook={this.deleteBook} book={book}/>
                </Carousel.Caption>

              </Carousel.Item>

            ))}

          </Carousel>
        ) : (
          <h3>No Books Found </h3>
        )
        }
        {this.state.bookForm ? <BookFormModal onCreate={this.createNewBooks} bookFormHandler={this.bookFormHandler} onHide ={this.onHide} /> : <AddBook onButtonClick={this.bookFormHandler} /> }
        {this.state.bookForm ? <FormUpdateModal onUpdate={this.onUpdate} updateHandler={this.updateHandler} onHide ={this.onHide} /> : <UpdateBook onButtonClick={this.bookFormHandler} onUpdate={this.onUpdate}/> }
      </>
    )
  }
}

export default BestBooks;
