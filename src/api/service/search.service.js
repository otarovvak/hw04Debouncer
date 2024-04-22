import axios from "../axios";

export const useSearchService = () => {
  const search = async (query) => {
    return (
      await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track`)
    ).data.tracks.items;
  };

  return { search };
};
