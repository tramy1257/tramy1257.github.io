import classes from './Button.module.css';

const button = (props) => (
  <button 
    className={classes.Button}
    onClick={classes.click}>{props.children}</button>
);

export default button;
