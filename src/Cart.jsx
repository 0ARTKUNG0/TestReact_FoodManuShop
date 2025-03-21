import React, { useRef, useCallback } from 'react';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashCan, faPencilAlt, faPrint, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { 
    cart, 
    increaseQuantity, 
    decreaseQuantity, 
    removeFromCart, 
    updateDescription,
    printReceipt,
    calculateTotalPrice
  } = useCart();

  const cartIsEmpty = Object.keys(cart).length === 0;
  const totalPrice = calculateTotalPrice();
  
  // Use refs to prevent multiple handler calls
  const isDecreasing = useRef(false);
  const isIncreasing = useRef(false);
  
  // Create memoized handlers to prevent unnecessary re-renders
  const handleDecrease = useCallback((productId, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Prevent multiple rapid clicks
    if (isDecreasing.current) return;
    
    isDecreasing.current = true;
    decreaseQuantity(productId);
    
    // Reset after a short delay
    setTimeout(() => {
      isDecreasing.current = false;
    }, 300);
  }, [decreaseQuantity]);
  
  const handleIncrease = useCallback((productId, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Prevent multiple rapid clicks
    if (isIncreasing.current) return;
    
    isIncreasing.current = true;
    increaseQuantity(productId);
    
    // Reset after a short delay
    setTimeout(() => {
      isIncreasing.current = false;
    }, 300);
  }, [increaseQuantity]);

  return (
    <div className="card" style={{ borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <div className="card-header" style={{ backgroundColor: '#561C24', color: 'white', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', padding: '15px' }}>
        <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', fontSize: '22px' }}>
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Your Order
        </h2>
      </div>
      <div className="card-body">
        <div id="cart" className="mt-2">
          {cartIsEmpty ? (
            <p>ยังไม่มีสินค้าในตะกร้า.</p>
          ) : (
            <>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(cart).map(([productId, item]) => {
                    const itemTotalPrice = item.quantity * item.price;
                    
                    return (
                      <tr key={productId}>
                        <td>
                          <div>{productId}</div>
                          {item.description ? (
                            <div className="order-description" style={{ 
                              fontSize: '0.85em', 
                              fontStyle: 'italic', 
                              color: '#666', 
                              marginTop: '4px' 
                            }}>
                              {item.description}
                              <FontAwesomeIcon 
                                icon={faPencilAlt} 
                                style={{ 
                                  marginLeft: '5px', 
                                  cursor: 'pointer', 
                                  color: '#999' 
                                }}
                                title="Edit instructions"
                                onClick={() => updateDescription(productId)} 
                              />
                            </div>
                          ) : (
                            <a 
                              href="#" 
                              style={{ 
                                fontSize: '0.85em', 
                                color: '#999', 
                                display: 'block', 
                                marginTop: '4px' 
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                updateDescription(productId);
                              }}
                            >
                              เพิ่มคําอธิบาย
                            </a>
                          )}
                        </td>
                        <td>
                          <div className="quantity-controls" style={{ 
                            display: 'flex', 
                            alignItems: 'center' 
                          }}>
                            <button 
                              className="btn btn-sm" 
                              style={{ 
                                backgroundColor: '#f8f9fa', 
                                border: '1px solid #ddd', 
                                width: '25px', 
                                height: '25px', 
                                padding: 0, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                              }}
                              onClick={(e) => handleDecrease(productId, e)}
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <span style={{ margin: '0 8px' }}>{item.quantity}</span>
                            <button 
                              className="btn btn-sm" 
                              style={{ 
                                backgroundColor: '#f8f9fa', 
                                border: '1px solid #ddd', 
                                width: '25px', 
                                height: '25px', 
                                padding: 0, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                              }}
                              onClick={(e) => handleIncrease(productId, e)}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </td>
                        <td>${item.price}</td>
                        <td>${itemTotalPrice}</td>
                        <td>
                          <button 
                            className="btn btn-danger delete-product"
                            onClick={() => removeFromCart(productId)}
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p>Total Price: ${totalPrice}</p>
            </>
          )}
        </div>
        <button 
          className="btn btn-block mt-3" 
          id="printCart" 
          style={{ 
            backgroundColor: '#561C24', 
            color: 'white', 
            fontWeight: 600, 
            padding: '12px', 
            borderRadius: '8px' 
          }}
          onClick={printReceipt}
        >
          <FontAwesomeIcon icon={faPrint} className="mr-2" /> Print Order Receipt
        </button>
      </div>
    </div>
  );
};

export default Cart;