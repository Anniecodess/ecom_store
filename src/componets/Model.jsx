import "./styles/modal.css";

function Modal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>×</button>
        <img src={product.image} alt="" />
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="cat">{product.category}</p>
        <p className="desc">{product.description}</p>
      </div>
    </div>
  );
}

export default Modal;
