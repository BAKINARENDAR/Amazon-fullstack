import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import thumb2 from './thumb2.jpg';
import thumb3 from './thumb3.jpg';
import thumb4 from './thumb4.jpg';
import thumb5 from './thumb5.jpg';
import thumb6 from './thumb6.jpg';
import thumbnail from "./thumbnail.jpg";

const ProductsZoom = () => {
  const [selectedImage, setSelectedImage] = useState(thumbnail);

  return (
    <div className="details-sidebar">
      <div>
        {/* Main Image */}
        <div className="thumbnail-major">
          <InnerImageZoom
            src={selectedImage} // Use the selectedImage state here
            alt="Product"
            hideHint={true}
            zoomType="hover"
            zoomScale={2}
          />
        </div>

      
        <div className="thumbnail-gallery" >
          <img
            className="thumbnail"
            src={thumbnail}
            alt="Thumbnail 1"
            onClick={() => setSelectedImage(thumbnail)} // Update selected image
            
          />
          <img
            className="thumbnail"
            src={thumb2}
            alt="Thumbnail 2"
            onClick={() => setSelectedImage(thumb2)} // Update selected image
            
          />
          <img
            className="thumbnail"
            src={thumb3}
            alt="Thumbnail 3"
            onClick={() => setSelectedImage(thumb3)} // Update selected image
            
          />
          <img
            className="thumbnail"
            src={thumb4}
            alt="Thumbnail 4"
            onClick={() => setSelectedImage(thumb4)} // Update selected image
            
          />
          <img
            className="thumbnail"
            src={thumb5}
            alt="Thumbnail 5"
            onClick={() => setSelectedImage(thumb5)} // Update selected image
            
          />
          <img
            className="thumbnail"
            src={thumb6}
            alt="Thumbnail 6"
            onClick={() => setSelectedImage(thumb6)} // Update selected image
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsZoom;
