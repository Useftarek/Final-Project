import React from 'react'
import Button from '../button/Button'
export default function BannerSection() {

   
  return (
    <section className='banner_section'>
        <div className='content'>
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <Button title={"Shop Now"} />
            
            <div className='stats'>
                <div>
                    <h2>200+</h2>
                    <p>International Brands</p>
                </div>
                <div>
                    <h2>2,000+</h2>
                    <p>High-Quality Products</p>
                </div>
                <div>
                    <h2>30,000+</h2>
                    <p>Happy Customers</p>
                </div>
            </div>
            
        </div>
        <div className="image">
                <img src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdDO3aGizO-wZt5YOgeQ~J6YYZ5VPfIEMLyM1FQtcOLXbkHRhZoDLkxD3IcS6wcRkTLoITyuV6Q9DHHg8C1jH0dC3riWszZeeI1C6~NdZYOHGHg3TCY6vwZHHtAXr1q6dITGpLqdoLnh7wwk5~HvaXn28Q3o~6fJC1TjLeN6p-vPmqU8uxbxbrLDz8McmAqJlR-rODizOep0o9-hk0wI8tA2F2cKWyawKk51pQpqeCFhT2Vy~LMy8x49dM3OqEdoH7GDwaVjXNHNDUISgTHqR5R3aGk7UvDOC2~EgVEiesdJCpR4jmdbZ~YrQQZ9Vxe~-Av7tVaozmJ0GLt15v4uUg__" alt="" />
            </div>
        <div className='brands'>
            <span>VERSE</span>
            <span>ZARA</span>
            <span>GUCCI</span>
            <span>PRADA</span>
            <span>Calvin Klein</span>
        </div>
        
    </section>
  )
}
