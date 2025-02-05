import Rating from '@mui/material/Rating';
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
const Sidebar=()=>{


    const departments=[
"All",
    "Amazon Devices & Accessories",
    "Baby",
    "Bags, Wallets & Luggage",
    "Beauty",
    "Books",
    "Car & Motorbike",
    "Clothing & Accessories",
    "Computer & Accessories",
    "Electronics",
    "Fashion",
    "Grocery & Gourmet Foods",
    "Health & Personnel Care",
    "Home & Kitchen",
    "Home Improvement",
    "Industrial & Scientific",
    "Jewellery",
    "Kindle Store",
    "Musical Instruments",
    "Office Products",
    "Outdoor Living",
    "Pet Supplies",
    "Shoes & Handbags",
    "Software",
    "Sports, Fitness & Outdoors",
    "Toys & Games",
    "Video Games",
    "Watches",

    ];
const price=[
    "All",
    "Under ₹500",
    "Under ₹1000",
    "Under ₹2000",
    "Under ₹5000",
    "Under ₹5000 and Above,"

];
const discount=[
    "All",
    "10% off or more",
    "25% off or more",
    "50% off or more",
    "70% off or more",
   

];

    
    return(
        <>
        
        <div className="sidebar">
            <div className="Filterbox">
                <div className="department-filter">
                    <h2>Department</h2>
                    <div className="depart-content">
                        {departments.map((department,index)=>(
 <label key={index} className="radio-label"> <input type="radio" name="department" value={department} />{department}</label>
                        ))}
                       
                      
                    

                       
                    </div>
                </div>



<div className="customer-reviews-filter">
    <h2>Customer Reviews</h2>
    <div className="review-content">
        <label className="radio-label">
            <input type="radio" name="review"/>All
        </label>
        <label className="radio-label">
            <input type="radio" name="review"/>
            <Rating className='rating' name="read-only" value={5} readOnly />and up
        </label>
        <label className="radio-label">
            <input type="radio" name="review"/>
            <Rating className='rating' name="read-only" value={5} readOnly />and up
        </label>
        <label className="radio-label">
            <input type="radio" name="review"/>
            <Rating className='rating' name="read-only" value={5} readOnly />and up
        </label>
        <label className="radio-label">
            <input type="radio" name="review"/>
            <Rating className='rating' name="read-only" value={5} readOnly />and up
        </label>
    </div>
</div>



<div className='price-filter'>
    <h2>Price</h2>
    <div className='price-content'>
        {price.map((prices,index)=>(
 <label className='radio-label'>
 <input key={index} type='radio' name='price'/>{prices}
</label>
        ))}
       
    </div>
</div>


<div className='discount-filter'>
    <h2>Discount</h2>
    <div className='discount-content'>
        {discount.map((discounts,index)=>(
 <label className='radio-label'>
 <input key={index} type='radio' name='price'/>{discounts}
</label>
        ))}
       
    </div>
</div>

                
            </div>
        </div>
        </>
    )
}
export default Sidebar;