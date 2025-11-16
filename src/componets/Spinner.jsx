import "./styles/spinner.css";

function Spinner() {
  const skeletons = Array(6).fill(0);

  return (
    <div className="skeleton-grid">
      {skeletons.map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-img"></div>
          <div className="skeleton-line short"></div>
          <div className="skeleton-line"></div>
        </div>
      ))}
    </div>
  );
}

export default Spinner;
