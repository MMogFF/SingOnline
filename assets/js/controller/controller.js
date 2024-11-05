import { fetchSongs } from "../model/model.js";
import { buildSearchSongs } from "../view/view.js";
export const searchSongs = async (searchInput) => {
    
    let searchResults = await fetchSongs();
    searchResults = searchResults.filter(song => song.title.toLowerCase().includes(searchInput.toLowerCase()) || song.artists.name.toLowerCase().includes(searchInput.toLowerCase()));
    buildSearchSongs(searchResults);
}