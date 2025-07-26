import { useEffect, useState } from "react";
import './Home.css';


const Home = () => {
  const [imagenes, setImagenes] = useState([]);
  const [query, setQuery] = useState("category");

  useEffect(() => {
    const getImagenes = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=3RRwHa9rHdQHrX6j8SPvCSrYx_zo-7HQtEHZRGtxVjM`
      );
      const data = await response.json();
      setImagenes(data.results);
    };
    getImagenes();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    if (value) setQuery(value);
  };

  return (
    <section className="home">
        
      <div>
        <h2>Pictures</h2>
        <form onSubmit={handleSearch} className="home-form">
          <input
            type="text"
            name="search"
            placeholder="Buscar categoría..."
          />
          <button type="submit">Buscar</button>
        </form>
        <div className="home-gallery">
          {imagenes.map(imagen => (
            <img
              key={imagen.id}
              src={imagen.urls.thumb}
              alt={imagen.alt_description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;