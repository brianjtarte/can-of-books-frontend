import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

export default class FormUpdateModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
          _id: this.props.books?._id,
          title: this.props.books?.title,
          description: this.props.books?.description,
          status: this.props.books?.status,
          email: this.props.books?.email,
          image: this.props.books?.image,
        }
      }

  handleSubmit = (event) => {
    event.preventDefault();
    
    this.props.onUpdate(this.state);
    this.props.onHide();
  }
  
  render() {
    return (
        <Modal show={this.props.bookFormUpdater} onHide={this.props.onHide}>
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