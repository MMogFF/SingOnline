import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import { supabaseUrl, supabaseKey } from './credentials.js';
import { fetchSongs } from './model/model.js';
import { fetchArtists } from './model/model.js';
import { fetchAlbums } from './model/model.js';
import { buildSearchPage } from './view/view.js';
import { buildArtistsHomePage } from './view/view.js';
import { buildLoginPage } from './view/view.js';
import { buildLyricsPage } from './view/view.js';
import { buildArtistsSinglePage } from './view/view.js';
import { fetchAlbumRel } from './model/model.js';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const app = document.getElementById('app');

export const songs = await fetchSongs();
export const artists = await fetchArtists();
export const albums = await fetchAlbums();
export const albumRel = await fetchAlbumRel();





console.log(albumRel);


import { buildMainPage } from './view/view.js';

// buildMainPage(songs);
// buildSearchPage(songs);
buildArtistsHomePage(artists);
// buildLoginPage();
// buildLyricsPage(songs);
// buildArtistsSinglePage(artists, albums)

