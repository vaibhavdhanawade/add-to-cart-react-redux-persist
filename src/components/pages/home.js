import React, { useEffect, useState } from 'react'
import { Grid } from 'semantic-ui-react';
import ProductCard from './productCard';
import data from './data';
import ProductSkeleton from './ProductSkeleton';
import { useDispatch, useSelector } from 'react-redux'
import {loadProducts} from '../../features/products/productsSlice';

function Home() {

  const products = useSelector((state) => state.products.product)
  const filteredProducts = useSelector((state) => state.products.filteredProduct)

  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

  const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
      useEffect(()=>{
        getProducts();
      })

      const getProducts = async () =>{
        const productData =  await data;
        dispatch(loadProducts(productData));
        setLoading(false);
      }

      const style ={
          backgroundColor: '#cdc1ff',
          backgroundImage: 'linear-gradient(316deg, #cdc1ff 0%, #e5d9f2 74%)'
      }
      
      return (
        <div style={style}>
          <h2 className="ui header">
            <i className="smile outline icon"></i>
            <div className="content">
              Welcome !!!
              <div className="sub header">Your source for amazing products!</div>
            </div>
          </h2>
          {
            (loading) ? <ProductSkeleton /> : 
            <Grid columns={4} style={{padding:'10px', margin:'50px'}}>
              {displayProducts.map((product, index) => (
                <Grid.Column key={index}>
                  <ProductCard product={product}/>
                </Grid.Column>
              ))}
            </Grid>
          }
        </div>
      );
}

export default Home