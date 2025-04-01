import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    setIsSearching(true);
    
    try {
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults);
        
        if (searchResults.length === 0) {
          setError(`No movies found for "${searchQuery}"`);
        } else {
          setError(null);
        }
    } catch (err) {
        console.log(err);
        setError("Failed to search movies...");
    } finally {
        setLoading(false);
    }
  };
  
  const handleClearSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
    setError(null);
    setLoading(true);
    
    getPopularMovies()
      .then(popularMovies => {
        setMovies(popularMovies);
      })
      .catch(err => {
        console.log(err);
        setError("Failed to load movies...");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
        {isSearching && (
          <button 
            type="button" 
            className="clear-button"
            onClick={handleClearSearch}
          >
            Clear
          </button>
        )}
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading movies...</div>
      ) : (
        <>
          <h2 className="section-title">
            {isSearching ? `Search Results for "${searchQuery}"` : "Popular Movies"}
          </h2>
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
