import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
export default function Cart({
  open,
  onCloseModal,
  foodCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleGoToCheckout,
}) {
  const dialog = useRef();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
    calculateTotal();
  }, [open, handleIncreaseQuantity]);

  function calculateTotal() {
    let total = 0;
    for (let meal of foodCart) {
      total += Number(meal.price) * Number(meal.qtd);
    }
    setTotal(total.toFixed(2));
  }

  return createPortal(
    <dialog className="modal" ref={dialog}>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {foodCart.map((meal) => (
            <li key={meal.id} className="cart-item">
              <p>
                {meal.name} - {meal.qtd} x {meal.price}
              </p>
              <div className="cart-item-actions">
                <button onClick={() => handleDecreaseQuantity(meal.id)}>
                  -
                </button>
                <p>{meal.qtd}</p>
                <button onClick={() => handleIncreaseQuantity(meal.id)}>
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>

        <p className="cart-total">${total}</p>
        <button onClick={() => onCloseModal()} className="text-button">
          Close
        </button>
        <button className="button" onClick={() => handleGoToCheckout()}>
          Go to checkout
        </button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}
