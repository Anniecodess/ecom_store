import "./styles/card.css";
import FavoriteButton from "./FavoriteButton";

function Card({ product, onSelect, isFavorite, toggleFavorite }) {
  return (
    <div className="card" onClick={() => onSelect(product)}>
      
      <FavoriteButton 
        isFavorite={isFavorite(product.id)} 
        onToggle={() => toggleFavorite(product)} 
      />

      <img src={product.image} alt="" />
      <h3 className="title">{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="cat">{product.category}</p>
    </div>
  );
}

export default Card;
