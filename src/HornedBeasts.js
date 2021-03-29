import React from 'react';
import Button from 'react-bootstrap/Button';

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
        <h2>{this.props.title}</h2>
        <img onClick={this.buttonClicked} src={this.props.image_url} alt={this.props.keyword} title={this.props.title} />
        <div>🖤{this.state.numberOfHearts} </div>
        <p>{this.props.description}</p>
        <Button onClick={this.buttonClicked} variant="Primary" size="lg" className="button">This is my fav!</Button>
      </>
    )
  };
}

export default HornedBeasts;
