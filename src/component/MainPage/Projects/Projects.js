import React, { Component } from 'react';
import classes from './Projects.module.css';
import Button from '../UI/Button/Button';

class Projects extends Component { 
  state = {
    divideList: ['All', 'Web', 'Python', 'Other']
  };

  render() {
    const divider = <div className={classes.Divider}>
      {this.state.divideList.map( (sectionName) => {
        return <Button key={sectionName}>{sectionName}</Button>;
      })}
    </div>

    return(
      <div>
        {divider}
      </div>
    ); // return
  } // render()
};

export default Projects;
