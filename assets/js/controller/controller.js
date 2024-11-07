import { fetchSongs } from "../model/model.js";
import { buildSearchPage, buildSearchSongs } from "../view/view.js";
import { buildMainPage } from "../view/view.js";
import { buildArtistsHomePage } from "../view/view.js";
import { buildLoginPage } from "../view/view.js";
import { buildLyricsPage } from "../view/view.js";
import { buildArtistsSinglePage } from "../view/view.js";
import { songs } from "../script.js";
import { albums } from "../script.js";
import { artists } from "../script.js";

export const logoNav = document.getElementById('logo');
export const homeNav = document.getElementById('home');
export const songsNav = document.getElementById('songs');
export const artistsNav = document.getElementById('artists');
export const loginNav = document.getElementById('login');

export const searchSongs = async (searchInput) => {
    
    let searchResults = await fetchSongs();
    searchResults = searchResults.filter(song => song.title.toLowerCase().includes(searchInput.toLowerCase()) || song.artists.name.toLowerCase().includes(searchInput.toLowerCase()));
    buildSearchSongs(searchResults);
}

homeNav.addEventListener('click', () => {
    buildMainPage(songs);
});

logoNav.addEventListener('click', () => {
    buildMainPage(songs);
});

songsNav.addEventListener('click', () => {
    buildSearchPage(songs);
});

artistsNav.addEventListener('click', () => {
    buildArtistsHomePage(artists);
});

loginNav.addEventListener('click', () => {
    buildLoginPage();
});


