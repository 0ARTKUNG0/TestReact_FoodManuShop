import React, { createContext, useState, useContext } from 'react';
import Swal from 'sweetalert2';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const showSweetAlert = (productId, productName, productImage, price) => {
    return Swal.fire({
      title: productName,
      html: `
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="${productImage}" style="max-width: 150px; border-radius: 8px;">
        </div>
        <div style="margin-bottom: 15px;">
          <label for="swal-quantity" style="display: block; text-align: left; margin-bottom: 5px;">จำนวน:</label>
          <input id="swal-quantity" type="number" class="swal2-input" value="1" min="1" max="10">
        </div>
        <div>
          <label for="swal-instructions" style="display: block; text-align: left; margin-bottom: 5px;">คำอธิบายของอาหาร (optional):</label>
          <textarea id="swal-instructions" class="swal2-textarea" placeholder="ไม่เอาผัก,เพิ่มซอส,อื่นๆ..."></textarea>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Add to Cart',
      confirmButtonColor: '#561C24',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      focusConfirm: false,
      preConfirm: () => {
        const quantity = parseInt(document.getElementById('swal-quantity').value) || 1;
        const instructions = document.getElementById('swal-instructions').value;
        
        return { quantity, instructions };
      }
    });
  };

  const isSpiceLevelProduct = (productId) => {
    // Look for elements with spice options by checking for radio buttons
    const productElement = document.querySelector(`[data-product-id="${productId}"]`)?.closest('.product');
    return productElement ? productElement.querySelector('input[name^="spice-"]') !== null : false;
  };

  const addToCartWithQuantity = (productId, price, quantity, instructions) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      
      if (!newCart[productId]) {
        newCart[productId] = { 
          quantity: quantity, 
          price: price,
          description: instructions || ""
        };
      } else {
        newCart[productId].quantity += quantity;
        if (instructions) {
          newCart[productId].description = instructions;
        }
      }
      
      return newCart;
    });
    
    // Show confirmation toast
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Added to cart!',
      showConfirmButton: false,
      timer: 1500,
      toast: true
    });
  };

  const addToCart = async (productId, price, productImage) => {
    try {
      const result = await showSweetAlert(productId, productId, productImage, price);
      
      if (result.isConfirmed) {
        const { quantity, instructions } = result.value;
        
        // For spice level products
        if (isSpiceLevelProduct(productId)) {
          const productElement = document.querySelector(`[data-product-id="${productId}"]`).closest('.product');
          const selectedSpice = productElement.querySelector('input[name^="spice-"]:checked');
          const spiceLevel = selectedSpice ? selectedSpice.value : "No Spice";
          
          const fullProductName = `${productId} (${spiceLevel})`;
          
          addToCartWithQuantity(fullProductName, price, quantity, instructions);
        } else {
          addToCartWithQuantity(productId, price, quantity, instructions);
        }
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const increaseQuantity = (productId) => {
    setCart(prevCart => {
      if (!prevCart[productId]) return prevCart;
      
      const newCart = { ...prevCart };
      newCart[productId] = { 
        ...newCart[productId],
        quantity: newCart[productId].quantity + 1 
      };
      
      return newCart;
    });
  };

  const decreaseQuantity = (productId) => {
    console.log('Decreasing quantity for:', productId); // Debug log
    
    setCart(prevCart => {
      console.log('Previous quantity:', prevCart[productId]?.quantity); // Debug log
      
      if (!prevCart[productId]) return prevCart;
      
      const newCart = { ...prevCart };
      // Explicitly set the new quantity to be exactly one less than the current quantity
      const currentQuantity = newCart[productId].quantity;
      const newQuantity = currentQuantity - 1;
      
      console.log('Current quantity:', currentQuantity, 'New quantity:', newQuantity); // Debug log
      
      newCart[productId].quantity = newQuantity;
      
      if (newCart[productId].quantity <= 0) {
        delete newCart[productId];
      }
      
      return newCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });
  };

  const updateDescription = async (productId) => {
    if (!cart[productId]) return;

    const result = await Swal.fire({
      title: 'คำอธิบายของอาหาร',
      input: 'textarea',
      inputLabel: 'Update คำอธิบายของอาหาร:',
      inputValue: cart[productId].description || '',
      showCancelButton: true,
      confirmButtonText: 'Update',
      confirmButtonColor: '#561C24'
    });

    if (result.isConfirmed) {
      setCart(prevCart => {
        const newCart = { ...prevCart };
        newCart[productId] = { 
          ...newCart[productId],
          description: result.value 
        };
        return newCart;
      });
    }
  };

  const generateCartReceipt = () => {
    // Get current date and format it
    const orderDate = new Date();
    const formattedDate = orderDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    let receiptContent = `
        <style>
          @page {
            size: 80mm auto; /* Reduced width and auto height based on content */
            margin: 0;
          }
          body {
            width: 80mm;
            margin: 0 auto; /* Center the receipt */
            padding: 5px;
            font-family: Arial, sans-serif;
            font-size: 12px; /* Reduced font size */
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          h2 {
            text-align: center;
            margin: 5px 0;
            color: #561C24;
            font-size: 14px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 5px;
            font-size: 10px;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 3px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
          .order-description {
            font-size: 0.85em;
            font-style: italic;
            color: #666;
            margin-top: 3px;
          }
          .order-info {
            margin-bottom: 15px;
            font-size: 0.9em;
          }
          .store-info {
            margin-bottom: 15px;
            font-size: 0.9em;
            text-align: center;
          }
          @font-face {
            font-family: 'MN Tonkatsu';
            src: url('assets/font/MeawnumDemo.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
  
          @font-face {
            font-family: 'MN Tonkatsu';
            src: url('assets/font/MeawnumDemo.ttf') format('truetype');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
  
          @font-face {
            font-family: 'MN Tonkatsu';
            src: url('assets/font/MeawnumDemo.ttf') format('truetype');
            font-weight: normal;
            font-style: italic;
            font-display: swap;
          }
  
          * {
            font-family: 'MN Tonkatsu', 'Poppins', sans-serif;
          }
  
          .thai-text {
            font-family: 'MN Tonkatsu', sans-serif;
          }
        </style>
        <p style="text-align: center; font-size: 14px; font-weight: bold; color: #561C24; margin: 2px 0;">TASTY BITES</p>
        
        <div class="store-info">
          <p>123 Food Street, Cuisine City<br>
          Tel: (123) 456-7890<br>
          www.tastybites.com</p>
          <div style="text-align: center; margin: 5px 0;">
            <img src="product_img/icon/line.jpg" alt="LINE QR Code" style="width: 50px; height: 50px;"><br>
            <span style="font-size: 0.7em;">Connect with us on LINE</span>
          </div>
        </div>
        
        <div class="order-info" style="margin: 3px 0; font-size: 10px;">
          <p style="margin: 2px 0;"><strong>Order Date:</strong> ${formattedDate}</p>
          <p style="margin: 2px 0;"><strong>Order #:</strong> ${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
        </div>
        
        <h2>Order Receipt</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>`;
  
    let totalPrice = 0;
  
    for (const productId in cart) {
      const item = cart[productId];
      const itemTotalPrice = item.quantity * item.price;
  
      receiptContent += `
          <tr>
            <td>
              ${productId}
              ${item.description ? `<div class="order-description">${item.description}</div>` : ''}
            </td>
            <td>${item.quantity}</td>
            <td>$${item.price}</td>
            <td>$${itemTotalPrice}</td>
          </tr>`;
  
      totalPrice += itemTotalPrice;
    }
  
    receiptContent += `
          </tbody>
        </table>
        <p><strong>Total Price:</strong> $${totalPrice}</p>
        <p style="text-align: center; margin-top: 5px; font-size: 10px;">Thank you for your order!</p>
        `;
  
    return receiptContent;
  };

  const printReceipt = () => {
    const title = "Thank you!";
    const content = generateCartReceipt();
    
    const printWindow = window.open("", "_blank");
    printWindow.document.write(
      `<html><head><title>${title}</title></head><body>${content}</body></html>`
    );
    printWindow.document.close();
    printWindow.print();
  };

  const calculateTotalPrice = () => {
    return Object.values(cart).reduce(
      (total, item) => total + item.quantity * item.price, 
      0
    );
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        updateDescription,
        printReceipt,
        calculateTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;