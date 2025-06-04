import { useState } from "react";
import MainHeader from "./components/MainHeader";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [foodCart, setFoodCart] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);

  function handleAddFoodToCart(id, name, price) {
    setFoodCart((prevFoodCart) => [
      ...prevFoodCart,
      { id, name, price, qtd: 1 },
    ]);
  }

  function handleIncreaseQuantity(id) {
    const updatedCart = foodCart.map((meal) => {
      if (meal.id === id) {
        return { ...meal, qtd: meal.qtd + 1 };
      }
      return meal;
    });
    setFoodCart(updatedCart);
  }

  function handleDecreaseQuantity(id) {
    const updatedCart = foodCart.map((meal) => {
      if (meal.id === id) {
        return { ...meal, qtd: meal.qtd - 1 };
      }
      return meal;
    });
    setFoodCart(updatedCart);
  }

  function handleOpenModal() {
    setOpenModal(!openModal);
  }

  function onCloseModal() {
    setOpenModal(false);
  }

  function handleOpenCheckout() {
    setOpenCheckout(!openCheckout);
  }

  function onCloseCheckout() {
    setOpenCheckout(false);
  }

  function handleGoToCheckout() {
    setOpenModal(false);
    setOpenCheckout(true);
  }

  return (
    <>
      <MainHeader counter={foodCart.length} handleOpenModal={handleOpenModal} />
      <Meals handleAddFoodToCart={handleAddFoodToCart} />
      <Cart
        open={openModal}
        onCloseModal={onCloseModal}
        foodCart={foodCart}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleGoToCheckout={handleGoToCheckout}
      />
      <Checkout open={openCheckout} />
    </>
  );
}

export default App;
