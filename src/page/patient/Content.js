import MoreInfo from "./MoreInfo";
import classes from './content.module.css';
const Content = (props) =>{

    return (<main className={classes.main}>
        {props.children}
        </main>);

}
export default Content;