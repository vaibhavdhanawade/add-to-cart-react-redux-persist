import React from 'react';
import { Card, Image, Icon, Button, Rating, Divider } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const handleAddToCart = (product) =>{
    const item = {
      ...product,
      quantity : 1
    }
    dispatch(addToCart(item));
    
  }
  return (
    <Card>
    <div style={{ display: 'flex', boxShadow:'5px 5px 22px 0px' }}>
      <Image src={product.images} style={{padding:'5px'}} width='50px' height="50px" wrapped ui={false} />
      <Card.Content style={{ width: '70%' }}>
        <Card.Header>{product.title}</Card.Header>
        <Card.Meta>
          <span className="date">${product.price}</span>
        </Card.Meta>
        <Rating icon="star" defaultRating={product.rating} maxRating={5} disabled />
        {/* <Divider horizontal /> */}
        <span className='extra right floated star' style={{padding:'2px'}}>
        <Button className='mini circular' color="orange" icon>
          <Icon name="heart" />
        </Button>
        <Button className='mini circular' color="blue" icon>
          <Icon name="cart" onClick={ () => handleAddToCart(product) }/>
        </Button>
        </span>
      </Card.Content>
    </div>
  </Card>
  );
};

export default ProductCard;