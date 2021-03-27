import React from 'react';
import './Main.css';
import HornedBeasts from './HornedBeasts.js';
import data from './data.json';

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
          {beastArray}
          </main>
        );

    }
  }

export default Main;
