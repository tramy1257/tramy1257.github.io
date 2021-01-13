import React, { Component } from 'react';
import classes from './MainPage.module.css';
import Projects from './Projects/Projects';
import Button from './UI/Button/Button';

class mainPage extends Component { 
  state = {
    navList: ['Projects', 'About', 'Resume', 'Contact']
  }
  
  render() {
    const topNav = <div className={classes.topNav}>
      {this.state.navList.map( (sectionName) => {
        return <Button key={sectionName}>{sectionName}</Button>;
      })}
    </div>

    return(
      <div className={classes.MainPage}>
        <div className={classes.Content}>
          <h1>Name</h1>
          {topNav}

          <Projects />
          <p>About</p>
          <p>Resume</p>
          <p>Contact</p>
        </div>
      </div>
    ); // return
  } // render()
};

export default mainPage;
