import { useEffect, useState } from "react";
import { useSearchService } from "./api/service/search.service";

function App() {
  const searchService = useSearchService();
  const [tracks, setTracks] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncer, setDebouncer] = useState(null);

  const getTracks = async () => {
    if (!query) return setTracks([]);
    setTracks(await searchService.search(query));
  };

  useEffect(() => {
    if (debouncer) clearTimeout(debouncer);
    setDebouncer(
      setTimeout(() => {
        getTracks();
      }, 1000)
    );
  }, [query]);

  useEffect(() => {
    return () => {
      if (debouncer) clearTimeout(debouncer);
    };
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {tracks.map((track, index) => (
        <div key={index}> {track.name} </div>
      ))}
    </div>
  );
}

export default App;
