import logoImg from "../assets/logo.jpg";

export default function MainHeader({ counter, handleOpenModal }) {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logoImg} alt="reactfood logo" />
        <h1>reactfood</h1>
      </div>

      <button onClick={() => handleOpenModal()} className="text-button">
        Cart({counter})
      </button>
    </div>
  );
}
