import { useCart } from '../../context/CartContext';
import * as Styled from './style';
import CartItem from './CartItem';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { formatPrice } from '../../utils/functions';

const Cart: React.FC = () => {
  const { showCart, toggleCart, items } = useCart();
  const route = useRouter();
  const formatedTotalPrice = useMemo(() => {
    const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity) , 0);
    return formatPrice(totalPrice);
  }, [items]);

  useEffect(() => {
    if(showCart){
      toggleCart()
    }
  }, [route.asPath]);

  return(
    <Styled.Wrapper show={showCart}>
      <Styled.CloseButton onClick={toggleCart}>Close</Styled.CloseButton>
      <Styled.CartList>
        {items.map((item) => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              quantity={item.quantity}
              name={item.name}
              image={item.image}
            />
          </li>)
        )}
      </Styled.CartList>
      <Styled.Total>Total: R${formatedTotalPrice}</Styled.Total>
    </Styled.Wrapper>
  );
}

export default Cart;