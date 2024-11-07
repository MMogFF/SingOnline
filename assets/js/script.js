import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import { supabaseUrl, supabaseKey } from './credentials.js';
import { fetchSongs } from './model/model.js';
import { fetchArtists } from './model/model.js';
import { buildSearchPage } from './view/view.js';
import { buildArtistsHomePage } from './view/view.js';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const app = document.getElementById('app');

export const songs = await fetchSongs();
export const artists = await fetchArtists();





// const fetchImg = async () => await supabase.storage.from('letsG00').getPublicUrl('artists/u2.jpg'); {

//     if (error) {
//         console.error('Error fetching public URL:', error);
//     } else {
//         console.log('Response data:', data);
//         const publicURL = data.publicUrl;
//         console.log('Public URL:', publicURL);
//     }
// }

import { buildMainPage } from './view/view.js';

// buildMainPage(songs);
// buildSearchPage(songs);
buildArtistsHomePage(artists);

