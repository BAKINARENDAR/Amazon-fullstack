import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ProductsZoom = ({ images }) => {
  // Set the initial selected image to the first image in the array, or a fallback
  const [selectedImage, setSelectedImage] = useState(images && images.length > 0 ? images[0] : "");

  return (
    <div className="details-sidebar">
      <div>
        {/* Main Image */}
        <div className="thumbnail-major">
          <InnerImageZoom
            src={selectedImage || "/path/to/fallback-image.jpg"} // Fallback if no image
            alt="Product"
            hideHint={true}
            zoomType="hover"
            zoomScale={2}
          />
        </div>

        {/* Thumbnail Gallery */}
        <div className="thumbnail-gallery">
          {images && images.length > 0 ? (
            images.map((imageUrl, index) => (
              <img
                key={index}
                className="thumbnail"
                src={imageUrl}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(imageUrl)} // Update selected image
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsZoom;