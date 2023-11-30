import Layout from "./Layout";
import classes from './Content.module.css'
import background from '../../assets/cargo.jpg'
const Content = () => {
  return (
    <div>
    <img className={classes.logo} src={background} alt="background"></img>
      <Layout />
    </div>
  );
};

export default Content;
