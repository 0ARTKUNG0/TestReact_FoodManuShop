import React, { useState } from 'react';
import { useCart } from './CartContext';

const Product = ({ id, name, price, image, hasSpiceLevel = false }) => {
  const { addToCart } = useCart();
  const [spiceLevel, setSpiceLevel] = useState("No Spice");

  const handleAddToCart = () => {
    // For products with spice options, we'll pass the selected spice level to our cart
    addToCart(hasSpiceLevel ? `${name} (${spiceLevel})` : name, price, image);
  };

  return (
    <div className="col-md-3 product">
      <img src={image} alt={name} width="130px" height="130px" />
      <h5>{name}<br />฿{price}</h5>
      
      {hasSpiceLevel && (
        <div className="spice-level-container">
          <p>ระดับความเผ็ด:</p>
          <div className="spice-selection">
            <div className="spice-option">
              <input 
                type="radio" 
                id={`no-spice-${id}`} 
                name={`spice-${id}`} 
                value="No Spice" 
                checked={spiceLevel === "No Spice"}
                onChange={() => setSpiceLevel("No Spice")}
              />
              <label htmlFor={`no-spice-${id}`}>ไม่เผ็ด</label>
            </div>
            
            <div className="spice-option">
              <input 
                type="radio" 
                id={`mild-${id}`} 
                name={`spice-${id}`} 
                value="Mild_Spicy" 
                checked={spiceLevel === "Mild_Spicy"}
                onChange={() => setSpiceLevel("Mild_Spicy")}
              />
              <label htmlFor={`mild-${id}`}>
                เผ็ดน้อย <img src="product_img/icon/chili-pepper.png" alt="Chili" className="chili-icon" width="20" />
              </label>
            </div>
            
            <div className="spice-option">
              <input 
                type="radio" 
                id={`medium-${id}`} 
                name={`spice-${id}`} 
                value="Medium_Spicy" 
                checked={spiceLevel === "Medium_Spicy"}
                onChange={() => setSpiceLevel("Medium_Spicy")}
              />
              <label htmlFor={`medium-${id}`}>
                เผ็ดปานกลาง 
                <img src="product_img/icon/chili-pepper.png" alt="Chili" className="chili-icon" width="20" />
                <img src="product_img/icon/chili-pepper.png" alt="Chili" className="chili-icon" width="20" />
              </label>
            </div> 
            
            <div className="spice-option">
              <input 
                type="radio" 
                id={`hot-${id}`} 
                name={`spice-${id}`} 
                value="Hot_Spicy" 
                checked={spiceLevel === "Hot_Spicy"}
                onChange={() => setSpiceLevel("Hot_Spicy")}
              />
              <label htmlFor={`hot-${id}`}>
                เผ็ดมาก 
                <img src="product_img/icon/chili-pepper.png" alt="Chili" className="chili-icon" width="20" />
                <img src="product_img/icon/chili-pepper.png" alt="Chili" className="chili-icon" width="20" />
                <img src="product_img/icon/chili-pepper.png" alt="Chili" className="chili-icon" width="20" />
              </label>
            </div>
          </div>
        </div>
      )}

      <button 
        className="btn btn-primary add-to-cart" 
        style={hasSpiceLevel ? { backgroundColor: '#561C24', color: 'white', borderColor: '#561C24' } : {}}
        data-product-id={name}
        data-price={price}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;