import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hideImage}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.animalImage.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={this.props.animalImage.image_url} alt={this.props.animalImage.title} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={this.props.hideImage}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast