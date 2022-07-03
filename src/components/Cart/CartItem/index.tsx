import { useCart } from '../../../context/CartContext';
import BaseCounter from '../../UI/BaseCounter';
import Image from 'next/image';
import * as Styled from './style';

const CartItem: React.FC<{quantity: number, name: string, id: number, image: string}> = ({name, quantity, id, image}) => {
  const { removeFromCart, decreaseItemQuantity, increaseItemQuantity } = useCart();

  const handleClick = (id: number) => {
    removeFromCart(id);
  }

  return(
    <Styled.Wrapper>
      <Styled.ImageContainer>
        <Image 
            alt={`Foto do produto ${name}`}
            src={image}
            objectFit="contain"
            layout="fill"
            quality={100}
          />
      </Styled.ImageContainer>
      <Styled.Title>{name}</Styled.Title>
      <BaseCounter
        quantity={quantity}
        decreaseQuantity={() => decreaseItemQuantity(id)}
        increaseQuantity={() => increaseItemQuantity(id)}
      />
      <Styled.RemoveButton onClick={() => handleClick(id)} />
    </Styled.Wrapper>
  );
}

export default CartItem;