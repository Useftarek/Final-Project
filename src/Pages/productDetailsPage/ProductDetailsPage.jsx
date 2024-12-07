import React, { Fragment, useEffect, useState } from 'react'
import Products_Details_Content from '../../components/products_Details_Content/Products_Details_Content'
import Product_Images from '../../components/Product_details_image/Product_Images'
import ReviewSection from '../../components/reviewsection/ReviewSection';
import AlsoLike from '../../components/alsolike/AlsoLike'



export default function ProductDetailsPage() {
  return (
    <Fragment>
      <div className='product_details_page'>
        <Product_Images />
        <Products_Details_Content />
      </div>
      <div>
        <ReviewSection />
        <hr />
        <AlsoLike />
      </div>
    </Fragment>
  )
}
