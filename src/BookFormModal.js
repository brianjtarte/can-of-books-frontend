import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

export default class BookFormModal extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: event.target.bookTitle.value,
      description: event.target.bookDescription.value,
      status: event.target.bookStatus.value,
      email: event.target.userEmail.value,
      image: event.target.bookImage.value
    }
    this.props.onCreate(newBook)
    this.props.onHide();
  }
  
  render() {
    return (
        <Modal show={this.props.bookFormHandler} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Body>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="bookTitle">
          <Form.Label>Book Title</Form.Label>
          <Form.Control type="name" placeholder="Enter Book Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bookDescription">
          <Form.Label>Book Description</Form.Label>
          <Form.Control type="name" placeholder="Enter Book Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bookStatus">
          <Form.Label>Book Status</Form.Label>
          <Form.Control type="name" placeholder="Enter Book Status" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="userEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter user email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bookImage">
          <Form.Label>Book Image Link</Form.Label>
          <Form.Control type="name" placeholder="Paste link to an image of your book" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Modal.Body>
      </Modal.Header>
      <Modal.Footer>
            <Button variant="info" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
      </Modal>
    )
  }
}