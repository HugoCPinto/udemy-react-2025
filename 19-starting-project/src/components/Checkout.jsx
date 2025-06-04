import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Checkout({ open }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted with data:", data);
    // send to the server
    dialog.current.close();
  }

  return createPortal(
    <dialog className="modal" ref={dialog}>
      <div className="control">
        <h2>Checkout</h2>
        <p>Total amount: $10</p>
        <form onSubmit={handleSubmit}>
          <div className="control-row">
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="control-row">
            <input id="name" name="name" required />
          </div>
          <div className="control-row">
            <label htmlFor="email">Email</label>
          </div>
          <div className="control-row">
            <input id="email" name="email" required />
          </div>
          <div className="control-row">
            <label htmlFor="street">Street</label>
          </div>
          <div className="control-row">
            <input id="street" name="street" required />
          </div>
          <div className="control-row">
            <label htmlFor="postalCode">Postal code</label>
          </div>
          <div className="control-row">
            <input id="postalCode" name="postalCode" required />
          </div>
          <div className="control-row">
            <label htmlFor="city">City</label>
          </div>
          <div className="control-row">
            <input id="city" name="city" required />
          </div>
          <button onClick={() => onCloseModal()} className="text-button">
            Close
          </button>
          <button className="button">Submit order</button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}
