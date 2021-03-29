import React from 'react';
import './Main.css';
import HornedBeasts from './HornedBeasts.js';
import data from './data.json';
import { CardColumns } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    let beastArray = data.map( animal => {
    return <HornedBeasts 
        name = {animal.keyword}
        title = {animal.title}
        image_url = {animal.image_url}
        description = {animal.description}
          
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
