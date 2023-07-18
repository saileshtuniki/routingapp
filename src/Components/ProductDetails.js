import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

function ProductDetails() {
    const {id} = useParams();
  return (
    <div>
      <h2>Product details :{id}</h2>
    </div>
  )
}

export default ProductDetails
