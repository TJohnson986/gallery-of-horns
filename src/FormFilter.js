import React from 'react';
import Form from 'react-bootstrap/Form'

class FormFilter extends React.Component {

  constructor(props) {
    super(props);

    this.State = {
      selectedHorns: 'horns'
    };
  }

  handleHornsSelected = event => {
    const horns = parseInt(event.target.value);
    
    let filteredBeasts = this.props.animals.filter(animal => animal.horns === horns);
    let beastsToRender = horns ? filteredBeasts : this.props.animals;
    this.props.identifyFilteredBeasts(beastsToRender)
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="Choose_Horns">
          <Form.Label>Select a number of horns</Form.Label>
          <Form.Control as='select' onChange={this.handleHornsSelected}>
            <option value="">Select All</option>
            <option value="1">1 horn</option>
            <option value="2">2 horns</option>
            <option value="3">3 horns</option>
            <option value="4">100 horns</option>
          </Form.Control>
        </Form.Group>
      </Form >
    );
  }
}

export default FormFilter;
