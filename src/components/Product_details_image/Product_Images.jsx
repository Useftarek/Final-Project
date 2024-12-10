import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../api/FetchAPI';
export default function Product_Images() {

  const { id } = useParams();
  const {data , isLoading , isError} = getSingleProduct(id);
  const ProductsData =  data?.data;
 
  
  

    const [selectedImage, setSelectedImage] = useState("https://s3-alpha-sig.figma.com/img/bbf4/11c2/5fc84f87eeac1062fbe47f49c192d4f2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j2zRJvvq9tM5IRPO74vJiPhtF6BOd5s0Ee3Tjh2MTz0N3-TFTRXDwXN2BbT8QXDf9mZeNYmStRD8tz5FJucFT-FSQfEPxGc09FJQRoLwRCGaFBB1LeLgUJVcrIRfZ3VH11QygxPv~Ihy~NAsplH7zOS7ctbN0F-YOTi7PiYM20RW6Z0dxEvMb-hX3fLiU0rCrASgKvYJ4jo~HYur0O4HfeQZJWCIwep~Rhjuq92NffqcGAZZl30rb-gFn5SQXQSMUfBQSvgeG3UFOrdQrHBX8ADmEB8Fw47vMdZzNmqd1UavVZ7htorOdB4SsccWqo2fc~DXzlAOqpsTMfYf9FIOJw__");

  return (
    <div className="product-images py">
      <div className="thumbnails">
        <img
          src={ProductsData.image}
          alt="Thumbnail 1"
          onClick={() => setSelectedImage("https://s3-alpha-sig.figma.com/img/bbf4/11c2/5fc84f87eeac1062fbe47f49c192d4f2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j2zRJvvq9tM5IRPO74vJiPhtF6BOd5s0Ee3Tjh2MTz0N3-TFTRXDwXN2BbT8QXDf9mZeNYmStRD8tz5FJucFT-FSQfEPxGc09FJQRoLwRCGaFBB1LeLgUJVcrIRfZ3VH11QygxPv~Ihy~NAsplH7zOS7ctbN0F-YOTi7PiYM20RW6Z0dxEvMb-hX3fLiU0rCrASgKvYJ4jo~HYur0O4HfeQZJWCIwep~Rhjuq92NffqcGAZZl30rb-gFn5SQXQSMUfBQSvgeG3UFOrdQrHBX8ADmEB8Fw47vMdZzNmqd1UavVZ7htorOdB4SsccWqo2fc~DXzlAOqpsTMfYf9FIOJw__")}
          className={selectedImage === "image-url-main.png" ? "active" : ""}
        />
      </div>
      <div className="main-image-container">
        <img src={selectedImage} alt="Selected Product" className="main-image" />
      </div>
    </div>
  )
}
