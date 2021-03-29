import React from 'react';
import { CardColumns } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfHearts: 0
    }
  }

  buttonClicked = () => {
    this.setState({
      numberOfHearts: this.state.numberOfHearts + 1
    });
  }

  render() {
    return (
      <>
      <Card>
      <Card.Img variant="top" src={this.props.image_url} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        <div>🖤{this.state.numberOfHearts} </div>
        <Button onClick={this.buttonClicked} variant="Primary" size="lg" className="button">This is my fav!</Button>
        </Card.Text>
      </Card.Body>
    </Card>
      </>
    )
  };
}

export default HornedBeasts;
