import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>

    {/* <h1>heyy iam home</h1> */}
    <img className='home__image' src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" alt="" />

    {/* product id, title, price, rating, image  */}
   

    <div className="home__row">
    <Product id="12323141" title="The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses Paperback" price={11.96} rating={5} image="https://m.media-amazon.com/images/I/51CTIr1bJxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" />
    <Product id="12323143" title="Nogaiya Glass Wall Lamp (Multicolor)" price={10} rating={4} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41OdnuLUYaL.jpg" />
    </div>

    <div className="home__row">
    <Product id="12323142" title="ASUS Vivobook 16X (2022), 16.0-inch (40.64 cms) FHD+ 16:10, AMD Ryzen 5 5600H, Thin and Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Silver/1.80 kg), M1603QA-MB501WS" price={589} rating={4} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41CQCMPCSdL._SX300_SY300_QL70_FMwebp_.jpg" />

    <Product id="12323144" title="RIVER Men's Notch Lapel Regular fit Blazer (DBS/PL04/JK007_Sand Beige_L" price={11.96} rating={3} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81vZ2vwCuBL._UL1500_.jpg" />
    <Product id="12323146" title="Apple 2022 10.9-inch iPad (Wi-Fi, 64GB) - Blue (10th Generation)" price={562} rating={4} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61uA2UVnYWL._SX679_.jpg" />
    
    </div>
    <div className="home__row">
    <Product id="12323145" title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers" price={540} rating={5} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81vDZyJQ-4L._SY550_.jpg" />

    
    <Product id="12323141" title="Lalhaveli Mosaic Glass Tealight Candle Holders for Home Decoration Outdoor Indoor Decor Light 1 Piece" price={10.5} rating={4} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61genUAVkAL._SX522_.jpg" />
    </div>

    <div className="home__row">
    <Product id="12323148" title="Samsung 214 cm (85 inches) 8K Ultra HD Smart Neo QLED TV QA85QN900AKXXL (Steel)" price={15625} rating={5} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91RMUYY13VS._SX425_.jpg" />

    
    </div>
    

    {/* product */}
    </div>
  )
}

export default Home