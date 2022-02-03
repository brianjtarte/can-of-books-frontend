import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

export default class FormUpdateModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
          _id: this.props.book?._id,
          title: this.props.book?.title,
          description: this.props.book?.description,
          status: this.props.book?.status,
          image: this.props.book?.image,
        }
      }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onUpdate(this.state);
    this.props.onHide();
  }

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handleStatusChange = event => {
    this.setState({ status: event.target.value });
  };

  handleImageChange = event => {
    this.setState({ image: event.target.value });
  };


  
  
  render() {
    console.log(this.props);
    return (
        <Modal show={this.props.updateHandler} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Body>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="bookTitle">
          <Form.Label>Book Title</Form.Label>
          <Form.Control type="name" placeholder="Enter Book Title" onChange={this.handleTitleChange} value={this.state.title} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bookDescription">
          <Form.Label>Book Description</Form.Label>
          <Form.Control type="name" placeholder="Enter Book Description" onChange={this.handleDescriptionChange} value={this.state.description} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bookStatus">
          <Form.Label>Book Status</Form.Label>
          <Form.Control type="name" placeholder="Enter Book Status" onChange={this.handleStatusChange} value={this.state.status} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bookImage">
          <Form.Label>Book Image Link</Form.Label>
          <Form.Control type="name" placeholder="Paste link to an image of your book" onChange={this.handleImageChange} value={this.state.image} />
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