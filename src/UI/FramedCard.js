import classes from './framed-card.module.css';
const FramedCard = (props) =>{

    return(

        <div className={classes.screen}>
            <div className={classes.card}>
                <div className={classes.leftSideDiv}>
                    <header className={classes.header}>CONNEXION</header>
                    {props.children}
                </div>
                <div className={classes.rightSideDiv}>
                    <img>
                    </img>

                </div>

            </div>

        </div>

    );

}
export default FramedCard;