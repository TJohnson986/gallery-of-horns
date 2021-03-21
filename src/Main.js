import React from 'react';
import './Main.css';
import HornedBeasts from './HornedBeasts.js';


class Main extends React.Component {
  render() {
    return (
      <>
      <HornedBeasts title={'TitleOne'} imageUrl={'https://images.unsplash.com/photo-1518946222227-364f22132616?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'} description={'BeastOne'} />
      <HornedBeasts title={'TitleTwo'} imageUrl={'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80'} description={'BeastTwo'}/>
      </>
    );
  }
}


export default Main;
