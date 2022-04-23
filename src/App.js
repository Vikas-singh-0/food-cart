import "./Appp.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import { useState } from "react";
function App() {
  let [showModal, setShowModal] = useState(false);
  const showHandler = () => {
    setShowModal(true);
  };
  const onCloseHandler = () => {
    setShowModal(false);
  };
  return (
    <CartProvider>
      {showModal && <Cart onClose={onCloseHandler} />}
      <Header onShow={showHandler} />
      <main className="main">
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
