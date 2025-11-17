import { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "./Model";
import Spinner from "./Spinner";
import Favorite from "./Favorite";
import "./styles/Home.css";


function Home() {
  const [products, setProducts] = useState([]);
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const { favorites, toggleFavorite, isFavorite } = Favorite();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setDisplay(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let list = [...products];

    if (search) list = list.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    if (category !== "all") list = list.filter(p => p.category === category);
    if (sort === "low-high") list.sort((a, b) => a.price - b.price);
    if (sort === "high-low") list.sort((a, b) => b.price - a.price);

    setDisplay(list);
    setCurrentPage(1);
  }, [search, category, sort, products]);

  if (loading) return <Spinner />;

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = display.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(display.length / productsPerPage);

  return (
    <div className="home">
      <div className="filters">
        <input 
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="men's clothing">Men Clothing</option>
          <option value="women's clothing">Women Clothing</option>
          <option value="jewelery">Jewellery</option>
          <option value="electronics">Electronics</option>
        </select>

        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>
      </div>

      <div className="grid">
        {currentProducts.map(p => (
          <Card 
            key={p.id} 
            product={p} 
            onSelect={setSelectedProduct}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <div className="pagination">
        <button 
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          Prev
        </button>

        <span>{currentPage} / {totalPages}</span>

        <button 
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          Next
        </button>
      </div>

      <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default Home;
