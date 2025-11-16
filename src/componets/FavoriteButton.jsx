import "./styles/FavoriteButton.css";

function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button 
      className={`fav-btn ${isFavorite ? "active" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}

export default FavoriteButton;
