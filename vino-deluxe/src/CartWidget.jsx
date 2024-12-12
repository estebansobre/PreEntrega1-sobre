import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importación correcta de react-icons
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
  const cartItems = 5;

  return (
    <div style={{ position: 'relative' }}>
      <FaShoppingCart size={30} /> {/* Ícono del carrito */}
      <Badge bg="danger" style={{ position: 'absolute', top: 0, right: 0 }}>
        {cartItems} {/* Cantidad de elementos en el carrito */}
      </Badge>
    </div>
  );
};

export default CartWidget;
