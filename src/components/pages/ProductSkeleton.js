import React from 'react';


const ProductSkeleton = () => {
  return (
    <div class="ui segment" style={{padding:'150px'}}>
  <div class="ui active dimmer">
    <div class="ui text loader">Loading</div>
  </div>
  <p></p>
</div>
  );
};

export default ProductSkeleton;
