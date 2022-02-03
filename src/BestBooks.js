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
console.log(SERVER);

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookForm: false,
      updateForm: false,
      selectedBook: {}
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  componentDidMount() {
    this.getBooks();
    console.log('Your Books Have Been Received!')
  }

  bookFormHandler = () => {
    this.setState({
      bookForm: true
    });
  }

  updateHandler = (selectedBook) => {
    this.setState({
      updateForm: true,
      selectedBook: selectedBook
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
      baseURL: `${SERVER}`,
      url: `/books/${id}`
    }
    await axios(config);
    console.log(config);

  }

  onUpdate = async (updateBookId) => {
    console.log('book', updateBookId);
    const id = updateBookId._id;
    let updateBooks = this.state.books;
    console.log(updateBooks);
    updateBooks = this.state.books.map(currentBook => currentBook._id === updateBookId._id ? updateBooks : currentBook );
    this.setState({ books: updateBooks });
    console.log(id);
    const config = {
      params: { email: this.props.user.email },
      data: {description: updateBookId.description,
        image: updateBookId.image,
        status: updateBookId.status,
        title: updateBookId.title},
      method: 'put',
      baseURL: `${SERVER}`,
      url: `/books/${id}`
    }
    let response = await axios(config);
    console.log(response);
    this.getBooks();
  }
  

  render() {

    // /* TODO: render user's books in a Carousel */
      console.log(this.state.books);
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
                  <UpdateBook onButtonClick={this.updateHandler} book={book}/>
                  
                </Carousel.Caption>

              </Carousel.Item>

            ))}
  
          </Carousel>
        ) : (
          <h3>No Books Found </h3>
        )
        }
        {this.state.bookForm ? <BookFormModal onCreate={this.createNewBooks} bookFormHandler={this.bookFormHandler} onHide ={this.onHide} /> : <AddBook onButtonClick={this.bookFormHandler} /> }

        {this.state.updateForm ? <FormUpdateModal onUpdate={this.onUpdate} updateHandler={this.updateHandler} onHide ={this.onHide} book={this.state.selectedBook} /> : null }
       
      </>
    )
  }
}

export default BestBooks;
