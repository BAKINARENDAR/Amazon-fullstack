import { Carousel } from 'react-responsive-carousel';
import box10_image from './box10_image.png';
import box11_image from './box11_image.png';
import box9_image from './box9_image.png';
import hero1 from './hero1.jpg';
import hero2 from './hero2.jpg';
import hero3 from './hero3.jpg';
const Home =()=>
{
    return(
        <>
        <div></div>
 <div className="App">
    
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000} dynamicHeight>
        <div>
          <img src={hero1} alt="Product 1" />
      
        </div>
        <div>
          <img src={hero2} alt="Product 2" />
         
        </div>
        <div>
          <img src={hero3} alt="Product 3" />
         
        </div>
      </Carousel>
    </div>



    <div className='shop-section'>
        <div className='box1 box'>
            <div className='box-content'>
                <h2>Up to 75% off | Wall arts, painting, decor & more...</h2>
                <div className='box1-image'>
                </div>
                <p>See more</p>
            </div>
        </div>


        <div className='box1 box'>
            <div className='box-content'>
                <h2>Up to 60% off | Car, bike parts & accessories</h2>
                <div className='box2-image'>
                </div>
                <p>See more</p>
            </div>
        </div>


        <div className='box1 box'>
            <div className='box-content'>
                <h2>Customers’ Most-Loved products</h2>
                <div className='box3-image'>
                </div>
                <p>See more</p>
            </div>
        </div>


        <div className='box1 box'>
            <div className='box-content'>
                <h2>Starting ₹99 | Start your fitness journey</h2>
                <div className='box4-image'>
                </div>
                <p>See more</p>
            </div>
        </div>

<div className='box-slider'>
        <div className="App">
            <div className='box-heading'>
            <h2>Up to 75% off | A wide range of electronics & accessories from Small businesses</h2>
            <p className='box-para'> See all offers</p>
            </div>
    
    <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000} dynamicHeight>
      <div>
        <img src={box9_image} alt="Product 1" />
    
      </div>
      <div>
        <img src={box10_image} alt="Product 2" />
       
      </div>
      <div>
        <img src={box11_image} alt="Product 3" />
       
      </div>
    </Carousel>
  </div>

  </div>




        <div className='box1 box'>
            <div className='box-content'>
                <h2>Customers’ Most-Loved Fashion for you</h2>
                <div className='box5-image'>
                </div>
                <p>See more</p>
            </div>
        </div>



        <div className='box1 box'>
            <div className='box-content'>
                <h2>Combo packs | Under ₹799 | Amazon Brands & more</h2>
                <div className='box6-image'>
                </div>
                <p>See more</p>
            </div>
        </div>



        <div className='box1 box'>
            <div className='box-content'>
                <h2>Appliances for your home | Up to 55% off</h2>
                <div className='box7-image'>
                </div>
                <p>See more</p>
            </div>
        </div>



        <div className='box1 box'>
            <div className='box-content'>
                <h2>Discover Fashion Trends</h2>
                <div className='box8-image'>
                </div>
                <p>See more</p>
            </div>
        </div>

    
</div>
        </>





    );
}
export default Home;
