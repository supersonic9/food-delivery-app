import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';
import mealsImage from '../../assets/greekMeals.jpeg';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Greek Feeds</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes.mainImage}>
                <img src={mealsImage} alt="heaps of delish looking food laid out on a table"/>
            </div>
        </Fragment>
    );
};

export default Header;