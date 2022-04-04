import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const cartHasItems = cartCtx.items.length > 0;

    const onItemAddHandler = (item) => {
        cartCtx.addItem({
            ...item,
            amount: 1
        });
    };

    const onItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map(meal =>
            <CartItem key={meal.id} price={meal.price} name={meal.name} amount={meal.amount} onRemove={onItemRemoveHandler.bind(null, meal.id)} onAdd={onItemAddHandler.bind(null, meal)} />
        )}
    </ul>; 

    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span> Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onHideCart}>Close</button>
                {cartHasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;