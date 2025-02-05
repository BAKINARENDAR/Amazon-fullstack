import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete"; // Import the bin icon
import { IconButton } from "@mui/material";
import { useState } from "react";
const Cart = () => {
  const [quantity, setquantity] = useState(1);
  const handleDecrease = () => {
    if (quantity > 1) setquantity(quantity - 1);
  };
  const handleIncrease = () => {
    setquantity(quantity + 1);
  };
  return (
    <>
      <section>
        <div className="cart-page">
          <div className="cart-top">
            <div className="shopping-cart-heading">
              <h1>Shopping Cart</h1>
              <div className="down-heading">
                <p>Price</p>
                <span>Select all items</span>
              </div>
            </div>
            <div className="cart-details">
              <div className="cart-image"></div>
              <div className="carts">
                <div className="cart-info">
                  <div className="cart-info-product">
                    <p>
                      Kuber Industries Table Cloth For Dining|"90x60" Inch
                      |Stone Print Dining Table cover 6 Seater|Waterproof Table
                      Sheet,
                    </p>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">Limited time deal</span>
                        <div className="cart-pricing">
                          <h2 className="cart-pricing-offer">-15%</h2>
                          <h3 className="cart-pricing-rate">₹294</h3>
                        </div>
                        <div className="mrp-cart2">
                          <h3>M.R.P.:₹345.00</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-info2">
                  <span>In stock</span>
                  <div className="cart-fulfilled"></div>
                  <div className="cart-gift">
                    <input className="cart-gift-check" type="checkbox" />
                    <span>This will be a gift</span>
                  </div>
                  <div className="cart-quantity">
                    <IconButton onClick={handleDecrease}>
                      <DeleteIcon style={{ fontSize: "18px" }} />
                    </IconButton>
                    <span>{quantity}</span>
                    <IconButton onClick={handleIncrease}>
                      <AddIcon style={{ fontSize: "18px" }} />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="cart-mid">
          <div className="subtotal">
              <h2>
                Subtotal (1 item):<strong> ₹294.00</strong>
              </h2>
            </div>
            <div className="proceed-buy">
              <button className="buy">proceed to buy</button>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};
export default Cart;
