import { Fragment } from "react"
import classes from './options.module.css';
import Image0 from '../../assets/images/history.png';
import Image1 from '../../assets/images/checkup.png';
import Image2 from '../../assets/images/meet.png';
import Image3 from '../../assets/images/account.png';
import OptionCard from "../../UI/OptionCard";
const OPTIONS = [{option:'HISTORY',
                    image:Image0},
                {option:'CHECKUP',
                image: Image1},
                {option:'MEET',
                image: Image2},
                {option:'ACCOUNT',
                image: Image3}
            ];
    const onOptionClick = (value) => {
        console.log(value)
    }


const Options = () => {

    return( <Fragment>{
                OPTIONS.map((v, i)=> <OptionCard key={i} value={v.option} onClick={onOptionClick} src={v.image}/>)
            }
            </Fragment>

    );
}
export default Options;