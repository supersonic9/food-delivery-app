import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

    const cartCtx = useContext(CartContext);

    const addItemsToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount,
        });
    };

    const formattedPrice = props.price.toFixed(2);

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>
                    {props.description}
                </div>
                <div className={classes.price}>${formattedPrice}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addItemsToCartHandler} id={props.id}/>
            </div>
        </li>
    );
};

export default MealItem;