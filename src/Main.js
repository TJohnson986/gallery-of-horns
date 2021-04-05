import React from 'react';
import './Main.css';
import HornedBeasts from './HornedBeasts.js';
import { CardColumns } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    let beastArray = this.props.animals.map( (animal, indexKeys) => {
    return <HornedBeasts 
        name = {animal.keyword}
        title = {animal.title}
        image_url = {animal.image_url}
        description = {animal.description}
        horns = {animal.horns}
        key = {indexKeys}
        handleClick = {this.props.handleClick}
          />
        });
        
        return (
          <main>
            <CardColumns>
              {beastArray}
            </CardColumns>
          </main>
        );

    }
  }

export default Main;
